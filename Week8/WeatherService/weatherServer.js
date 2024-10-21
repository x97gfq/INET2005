const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.WEATHERAPI_KEY;
const API_URL = process.env.WEATHERAPI_URL;

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        const url = `${API_URL}?key=${API_KEY}&q=${city}`;
        console.log(url);

        const response = await axios.get(url);
        const data = response.data;

        const basicData = {
            city: data.location.name,
            temperature: data.current.temp_c,
            wind_speed: data.current.wind_kph,
            condition: data.current.condition.text
        };

        res.json(basicData);
    } catch (error) {
        //console.log(error);
        res.status(500).json({ error: 'Failed to fetch weather data', details: error.response.status });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/weather/Yarmouth`);
});
