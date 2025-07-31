import type { VercelRequest, VercelResponse } from 'vercel';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const GIST_ID = process.env.GIST_ID;

  if (!GIST_ID) {
    return res.status(500).json({ error: "GIST_ID not set" });
  }

  const rawUrl = `https://gist.githubusercontent.com/PepRov/${GIST_ID}/raw/MYSEQUENCE.fasta`;

  try {
    const gistRes = await fetch(rawUrl);

    if (!gistRes.ok) {
      return res.status(500).json({ error: "Failed to fetch Gist" });
    }

    const text = await gistRes.text();

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch FASTA", details: (e as Error).message });
  }
}
