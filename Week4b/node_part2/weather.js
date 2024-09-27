const express = require('express');
const axios = require('axios');
const app = express();

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data ' + error });
  }
});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});
