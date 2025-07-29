// pages/api/uploadGist.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { content, filename } = req.body;
  const gistID = "YOUR_FIXED_GIST_ID"; // Put your permanent Gist ID here

  const response = await fetch(`https://api.github.com/gists/${gistID}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      files: {
        [filename]: {
          content,
        },
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ message: data.message });
  }

  return res.status(200).json({
    gistID: data.id,
    rawURL: data.files[filename].raw_url,
  });
}


