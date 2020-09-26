const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const {
    mongoose
} = require('./database');
const compression = require('compression');

//Settings
//app.set('port' , process.env.PORT || 3000);
console.log(process.env.PORT);
//Middleware
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(cors({
    origin: 'dist/my-web'
}));

app.use(compression());

app.use(function (req, res, next) {
    if ((!req.secure) && (req.get('X-Forwarded-Proto') !== 'https')) {
        res.redirect(307, 'https://' + req.get('Host') + req.url);
    } else
        next();
});

app.use(express.static(__dirname + '/dist/my-web'));

app.get('https://emanuelcacheda.herokuapp.com', function (req, res) {
    res.sendFile(`./dist/my-web/index.html`);
});

//Routes
app.use('/api/formdata/', require('./routes/consulta.routes'));
app.use('/api/technologies/', require('./routes/technologies.routes'));
app.use('/api/', require('./routes/user.routes'));
//Starting the server

app.listen(process.env.PORT || 3000);