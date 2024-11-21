const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://data.novascotia.ca/resource/rcyb-u6kq.json', {
            responseType: 'json'
          });
        const placeToBelong = response.data;
        console.log("placeToBelong", placeToBelong);

        res.render('index', { placeToBelong });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});