import { VercelRequest, VercelResponse } from '@vercel/node';

const resendApiKey = process.env.RESEND_API_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
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

  const { name, company, email, message, hasSolicitation, reason } = req.body;

  if (!name || !company || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, company, email, and message are required.' });
  }

  // 1. Save to Supabase (fails gracefully if table is not setup yet)
  let dbSaved = false;
  if (supabaseUrl && supabaseServiceKey) {
    try {
      const dbRes = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
        method: 'POST',
        headers: {
          'apikey': supabaseServiceKey,
          'Authorization': `Bearer ${supabaseServiceKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          name,
          company_name: company,
          email,
          reason: reason || 'General Inquiry',
          has_solicitation: hasSolicitation || 'No',
          message
        })
      });
      if (dbRes.ok) {
        dbSaved = true;
      } else {
        console.warn('Supabase returned non-ok status for contacts insert:', dbRes.status);
      }
    } catch (e) {
      console.error('Graceful failure: Supabase contacts save error:', e);
    }
  }

  // 2. Send email notification via Resend
  if (!resendApiKey) {
    console.warn('Resend key missing, skipping email notification');
    return res.status(200).json({ success: true, dbSaved, emailSent: false, message: 'Message logged, but email notifications are offline.' });
  }

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
        subject: `New Lead: ${reason || 'General Inquiry'} - ${company}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #10b981; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 35%;">Name:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Reason for Contact:</td>
                <td style="padding: 8px 0;">${reason}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Solicitation in Hand?</td>
                <td style="padding: 8px 0;">${hasSolicitation}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; margin-bottom: 5px;">Message:</p>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; white-space: pre-wrap; color: #374151;">${message}</div>
            </div>
          </div>
        `
      })
    });

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      throw new Error(`Resend API responded with status ${emailRes.status}: ${errorText}`);
    }

    return res.status(200).json({ success: true, dbSaved, emailSent: true });
  } catch (error: any) {
    console.error('Resend email notification failed:', error);
    // Since message is already logged (or failed gracefully), let's report email error
    return res.status(500).json({ error: error.message || 'Failed to send email notification.' });
  }
}
