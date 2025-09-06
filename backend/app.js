const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

require('./db/conn'); // MongoDB connection

// Enable CORS for frontend
app.use(cors({
    origin: [
        'https://nova-core-two.vercel.app', // deployed frontend URL
        'http://localhost:3000'             // optional: local dev
    ],
    credentials: true // needed if sending cookies
}));

app.use(express.json());
app.use(require('./router/auth')); // your auth routes

// Middleware to log incoming requests
const consoleURL = (req, res, next) => {
    console.log(`User at URL: ${req.url}`);
    next();
};

app.get('/', consoleURL, (req, res) => {
    res.send('Hello world from backend!');
});

app.get('*', consoleURL, (req, res) => {
    res.status(404).send('<center><h1>404</h1><h3>The Page you are Looking for is Not Found</h3></center>');
});

// Start server (Render will use this)
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});
