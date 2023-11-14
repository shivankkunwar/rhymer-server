const dotenv = require('dotenv');
const {Configuration, OpenAIApi} = require('openai');

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const OpenAI = require("openai");

const openai = new OpenAI();
app.post('/rhyme', async (req, res) => {
  const headline = req.body.headline;

  try {
    const response = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt:`turn this sentence to Rhyme like a poem  like "sky is blue" to "sky is blue and so are you" and keep it concise and short (two or three lines only) and make sure its  rhyming atleast the last word: ${headline}`,
      max_tokens: 400,
    temperature: 0, 
      
    });

    
    if (response.choices && response.choices.length > 0) {
      
      const rhyme = response.choices[0].text.trim();
      
      if (rhyme) {
       
        res.json({ rhyme });
      } else {
       
        console.log('Empty completion received');
        res.status(500).json({ error: 'Empty completion received' });
      }
    } else {
      
      console.log('No choices received');
      res.status(500).json({ error: 'No choices received' });
    }
  } catch (error) {
    console.error('Error generating rhyme:', error.message);
    res.status(500).json({ error: 'Error generating rhyme' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));