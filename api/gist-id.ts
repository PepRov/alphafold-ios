import type { VercelRequest, VercelResponse } from 'vercel';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const GIST_ID = process.env.GIST_ID;

  if (!GIST_ID) {
    return res.status(500).json({ error: 'GIST_ID not set in environment' });
  }

  res.status(200).json({ gistID: GIST_ID });
}

