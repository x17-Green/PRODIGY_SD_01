// backend/server.js
import express from 'express';
import json from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());

const convertTemperature = (temp, scale) => {
    let celsius, fahrenheit, kelvin;

    switch (scale) {
        case 'Celsius':
            celsius = temp;
            fahrenheit = (temp * 9/5) + 32;
            kelvin = parseFloat(temp) + 273.15;
            break;
        case 'Fahrenheit':
            fahrenheit = temp;
            celsius = (temp - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'Kelvin':
            kelvin = temp;
            celsius = temp - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
        default:
            throw new Error('Invalid scale');
    }

    return { celsius, fahrenheit, kelvin };
};

app.post('/convert', (req, res) => {
    const { temperature, scale } = req.body;
    const temp = parseFloat(temperature);

    if (isNaN(temp)) {
        return res.status(400).json({ message: 'Invalid temperature value' });
    }

    const result = convertTemperature(temp, scale);
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

