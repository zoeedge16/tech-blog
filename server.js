const express = require('express');
const sequilize = require('./config/connection');

const app = express();
const PORT = process.env.PORT ?? 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});