const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/weather/Yarmouth');
        const weatherData = response.data;
        res.render('index', { weather: weatherData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching weather data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
