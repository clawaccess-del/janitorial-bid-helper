import { VercelRequest, VercelResponse } from '@vercel/node';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.NOTIFICATION_FROM_EMAIL || 'Janitorial Bid Helper <onboarding@resend.dev>';
const toEmail = process.env.NOTIFICATION_TO_EMAIL || 'tysonseo@gmail.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { companyName, email, score, blockers, answers } = req.body;

  if (!companyName || !email) {
    return res.status(400).json({ error: 'Missing required fields: companyName and email are required.' });
  }

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase environment variables');
    return res.status(500).json({ error: 'Database configuration missing.' });
  }

  let dbSaved = false;
  let dbData = null;

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'apikey': supabaseServiceKey,
        'Authorization': `Bearer ${supabaseServiceKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        company_name: companyName,
        email: email,
        score: score || 0,
        blockers: blockers || 0,
        answers: answers || {}
      })
    });

    if (response.ok) {
      dbSaved = true;
      dbData = await response.json();
    } else {
      const errorText = await response.text();
      console.warn(`Supabase API responded with status ${response.status}: ${errorText}`);
    }
  } catch (error: any) {
    console.error('Graceful failure: Supabase save-lead error:', error);
  }

  // 2. Send email notification via Resend if key is configured
  let emailSent = false;
  if (resendApiKey) {
    try {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromEmail,
          to: toEmail.includes(',') ? toEmail.split(',').map(s => s.trim()) : toEmail.trim(),
          subject: `New Readiness Audit: ${companyName} (${score || 0}%)`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h2 style="color: #10b981; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Contract Readiness Audit</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 35%;">Company Name:</td>
                  <td style="padding: 8px 0;">${companyName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Audit Score:</td>
                  <td style="padding: 8px 0; font-weight: 700; color: #10b981;">${score || 0}%</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Hard Blockers:</td>
                  <td style="padding: 8px 0; font-weight: 700; color: ${blockers > 0 ? '#ef4444' : '#10b981'};">${blockers || 0}</td>
                </tr>
              </table>
              <p style="font-size: 0.9rem; color: #6b7280;">Full audit responses are logged securely in your Supabase database dashboard.</p>
            </div>
          `
        })
      });
      if (emailRes.ok) {
        emailSent = true;
      }
    } catch (err) {
      console.error('Graceful failure: Resend save-lead notification error:', err);
    }
  }

  return res.status(200).json({ success: true, dbSaved, emailSent, data: dbData });
}
