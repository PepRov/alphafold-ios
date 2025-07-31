import type { VercelRequest, VercelResponse } from 'vercel';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { sequence } = req.body;

  if (!sequence || typeof sequence !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid sequence' });
  }

  const GIST_ID = process.env.GIST_ID;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GIST_ID || !GITHUB_TOKEN) {
    return res.status(500).json({ error: 'Missing environment variables' });
  }

  const filename = 'MYSEQUENCE.fasta';

  try {
    const response = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`, // ✅ Changed from Bearer
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
      },
      body: JSON.stringify({
        files: {
          [filename]: {
            content: sequence,
          },
        },
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      console.error('GitHub API error:', json);
      return res.status(500).json({ error: 'Failed to update gist', details: json });
    }

    const rawUrl = json?.files?.[filename]?.raw_url;

    if (!rawUrl) {
      return res.status(500).json({ error: 'Raw URL missing from GitHub response' });
    }

    return res.status(200).json({ rawUrl });
  } catch (error) {
    console.error('Unexpected error:', (error as Error).message || error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
