const express = require('express');
const sequilize = require('./config/connection');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const bcrypt = require('bcrypt');
const {SignIn, SignUp} = require('./models')

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
const isAuthenticated = (req, res, next) => {
    if(req.session.userId) {
        return next();
    }
    res.redirect('/signin');
}
// signup route
app.post('/signup', async (req,res) => {
    try {
        const { username, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const signUp = await SignUp.create({ username, password: hashPassword });

        req.session.signUpId = signUp.id;
        res.status(201).json({ message: 'SignIn successful' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
app.post('/signin', async (req,res) => {
    try {
        const { username, password } = req.body;
        const signIn = await SignIn.findOne({ where: { username } });
        if (!signIn) {
            return res.status(404).json({ message: 'User not found'})
        }
        const isPasswordValid = await bcrypt.compare(password, signIn.password);
        if (!isPasswordValid) {
            return res.status(404).json({ message: 'Invalid password'})
        }

        req.session.signInId = signIn.id;
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Server error' });
    }
});

app.post('/logout', (req,res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server error' });
        }
        res.status(200).json({ message: 'Logout successful' })
    })
});

app.get('/dashboard', isAuthenticated, (req,res) => {
    res.send('Welcome to the dashboard')
})

// setting up authentication routes and using bcrypt library to hash passwords and manage user authentication


sequilize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}`);
    });
});