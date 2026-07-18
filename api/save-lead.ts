import { VercelRequest, VercelResponse } from '@vercel/node';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

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

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Supabase API responded with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Supabase save-lead error:', error);
    return res.status(500).json({ error: error.message || 'Failed to save lead to database.' });
  }
}
