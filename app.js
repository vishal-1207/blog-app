if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express");
const sequelize = require('./config/db');
const path = require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


// User.sync();
// FederatedCredentials.sync();
sequelize.sync({ alter: true })
.then(() => {
    console.log('Tables synced');
})
.catch((err) => {
    console.log(err);
}); // This will create tables if they don't exist


app.get('/login', async (req, res, next) => {
    res.render('user/login');
});

app.post('/login', async (req, res, next) => {
    
});

app.get('/register', async (req, res, next) => {
    res.render('user/register');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening on port ${PORT}...`)
});