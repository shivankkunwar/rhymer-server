const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.post('/rhyme', async (req, res) => {
  const headline = req.body.headline;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: `Translate this headline into a rhyme: ${headline}`,
      temperature: 0.5,
      max_tokens: 60
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const rhyme = response.data.choices[0].text.strip();
    res.json({ rhyme });
  } catch (error) {
    res.status(500).json({ error: 'Error generating rhyme' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));