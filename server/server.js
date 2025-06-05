const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// simple route to test server
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from MeMojo server' });
});

app.post('/api/mood', async (req, res) => {
  const mood = req.body.mood || 'calm';
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.json({
      message: `You said you feel ${mood}. Add your OPENAI_API_KEY to get personalized AI responses.`,
    });
  }

  try {
    const completion = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'You are Mojo, a cheerful mood companion.' },
          { role: 'user', content: `I feel ${mood}.` },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const text = completion.data.choices[0].message.content.trim();
    res.json({ message: text });
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
    res.status(500).json({ message: 'Error contacting OpenAI API' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`MeMojo server listening on port ${port}`);
});
