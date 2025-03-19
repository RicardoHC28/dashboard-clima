require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Ruta para obtener el clima por ciudad
app.get('/weather', async (req, res) => {
    try {
        const { city, lat, lon } = req.query;

        if (!city && !(lat && lon)) {
            return res.status(400).json({ error: 'Se requiere el nombre de la ciudad o las coordenadas (lat, lon)' });
        }

        const params = {
            appid: API_KEY,
            units: "metric",
            lang: "es"
        };

        if (city) {
            params.q = city;
        } else {
            params.lat = lat;
            params.lon = lon;
        }

        const response = await axios.get(`${BASE_URL}/weather`, { params });
        res.json(response.data);

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos del clima' });
    }
});

// Ruta para obtener el pronóstico de 5 días
app.get('/forecast', async (req, res) => {
    try {
        const { city, lat, lon } = req.query;

        if (!city && !(lat && lon)) {
            return res.status(400).json({ error: 'Se requiere el nombre de la ciudad o las coordenadas (lat, lon)' });
        }

        const params = {
            appid: API_KEY,
            units: "metric",
            lang: "es"
        };

        if (city) {
            params.q = city;
        } else {
            params.lat = lat;
            params.lon = lon;
        }

        const response = await axios.get(`${BASE_URL}/forecast`, { params });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el pronóstico' });
    }
});

// Ruta para obtener el índice UV
app.get('/uvi', async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ error: 'Se requieren las coordenadas (lat, lon)' });
        }

        const response = await axios.get(`${BASE_URL}/uvi`, {
            params: {
                lat,
                lon,
                appid: API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el índice UV' });
    }
});

// Ruta para obtener alertas meteorológicas
app.get('/alerts', async (req, res) => {
    try {
        const { lat, lon } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ error: 'Se requieren las coordenadas (lat, lon)' });
        }

        const response = await axios.get(`${BASE_URL}/onecall`, {
            params: {
                lat,
                lon,
                appid: API_KEY,
                exclude: "current,minutely,hourly,daily",
                units: "metric",
                lang: "es"
            }
        });

        if (response.data.alerts) {
            res.json(response.data.alerts);
        } else {
            res.json([]); // Si no hay alertas, devolver un arreglo vacío
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las alertas meteorológicas' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});