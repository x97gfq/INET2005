const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/chat', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system",
          content: "You are an empathetic assistant who always acknowledges and validates the user\'s feelings."
        },
        { 
          role: 'user', content: prompt 
        }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    res.send(response.data.choices[0].message.content);
    
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error.response ? error.response.data : error.message);
    res.status(500).send('Error communicating with OpenAI API');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
