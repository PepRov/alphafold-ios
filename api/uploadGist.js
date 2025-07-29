export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { content, filename } = req.body;

  const response = await fetch('https://api.github.com/gists', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
    },
    body: JSON.stringify({
      description: "Uploaded from iOS app",
      public: false,
      files: {
        [filename || 'sequence.fasta']: {
          content
        }
      }
    })
  });

  const data = await response.json();

  if (response.ok) {
    res.status(200).json({ gistID: data.id, rawURL: Object.values(data.files)[0].raw_url });
  } else {
    res.status(500).json({ error: data });
  }
}

