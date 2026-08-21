import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = typeof req.query?.token === 'string' ? req.query.token.trim() : '';
  if (!/^[0-9a-fA-F-]{36}$/.test(token)) return res.status(400).json({ error: 'Invalid status link' });
  if (!process.env.DATABASE_URL) return res.status(500).json({ error: 'Database is not configured' });

  try {
    const sql = neon(process.env.DATABASE_URL);
    const rows = await sql`
      SELECT status, result_text, result_updated_at, created_at
      FROM scan_requests
      WHERE public_token = ${token}::uuid
      LIMIT 1
    `;
    if (!rows.length) return res.status(404).json({ error: 'Scan request not found' });
    return res.status(200).json({
      status: rows[0].status,
      result: rows[0].result_text,
      resultUpdatedAt: rows[0].result_updated_at,
      createdAt: rows[0].created_at
    });
  } catch (error) {
    console.error('status lookup failed', error);
    return res.status(500).json({ error: 'Could not load this scan status.' });
  }
}
