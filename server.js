const express = require('express');
const sequilize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT ?? 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequilize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}`);
    });
});