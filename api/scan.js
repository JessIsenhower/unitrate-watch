import { neon } from '@neondatabase/serverless';

const clean = (value, max = 500) => typeof value === 'string' ? value.trim().slice(0, max) : '';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.DATABASE_URL) return res.status(500).json({ error: 'Database is not configured' });

  const body = typeof req.body === 'object' && req.body ? req.body : {};
  const location = clean(body.location, 240);
  const currentRent = clean(body.currentRent, 40);
  const previousRent = clean(body.previousRent, 40) || null;
  const unitSize = clean(body.unitSize, 80);
  const unitType = clean(body.unitType, 120);
  const advertisedRate = clean(body.advertisedRate, 40) || null;
  const context = clean(body.context, 1200) || null;

  if (!location || !currentRent || !unitSize || !unitType) {
    return res.status(400).json({ error: 'Facility or ZIP, current rent, unit size, and unit type are required.' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      INSERT INTO scan_requests (location, current_rent, previous_rent, unit_size, unit_type, advertised_rate, context)
      VALUES (${location}, ${currentRent}, ${previousRent}, ${unitSize}, ${unitType}, ${advertisedRate}, ${context})
      RETURNING public_token
    `;
    const token = rows[0].public_token;
    return res.status(201).json({ ok: true, statusUrl: `/status.html?token=${encodeURIComponent(token)}` });
  } catch (error) {
    console.error('scan insert failed', error);
    return res.status(500).json({ error: 'Could not save the request. Please try again.' });
  }
}
