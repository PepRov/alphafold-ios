// latest-gist.ts
import type { VercelRequest, VercelResponse } from 'vercel';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const GIST_ID = process.env.GIST_ID;

  if (!GIST_ID) {
    return res.status(500).send('GIST_ID not set in environment');
  }

  const rawUrl = `https://gist.githubusercontent.com/PepRov/${GIST_ID}/raw/MYSEQUENCE.fasta`;

  try {
    const response = await fetch(rawUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch FASTA: ${response.statusText}`);
    }
    const content = await response.text();
    res.setHeader('Content-Type', 'text/plain');
    return res.status(200).send(content);
  } catch (error) {
    console.error('Fetch error:', error);
    return res.status(500).send('Failed to load FASTA');
  }
}



