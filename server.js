const express = require('express');
const sequilize = require('./config/connection');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const bcrypt = require('bcrypt');

const app = express();
const hbs = exphbs.create();
const PORT = process.env.PORT ?? 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(
    session({
        secret: 'SweetPeachPie12:)',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
        }
    })
)

// setting up authentication routes and using bcrypt library to hash passwords and manage user authentication


sequilize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}`);
    });
});