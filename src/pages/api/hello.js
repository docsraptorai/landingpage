export default async (req, res) => {
  // 1. Destructure the email address from the request body.
  const text = req.body.mail;

  if (!text) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const hello = 'hello ' + text;
    return res.status(200).json({ info: hello });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
