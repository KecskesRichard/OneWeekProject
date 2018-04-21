const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');
const helmet = require('helmet');
const cors = require('cors');
const passportEmail = require('passport-email');

const db = require('./config/database.js');
const User = require('./models/user.model');
const userRouter = require('./routes/user.route');
const todoRouter = require('./routes/todo.route');

const logDirectory = path.join(__dirname, 'log');
const port = process.env.PORT || 8080;

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

//connect to mongoDB
mongoose.connect(db.uri, db.options,
    () => {
        console.log('MongoDB connected.');
    },
    err => {
        console.error('MongoDB error: ' + err)
    }
);

//LOGGING
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
let accessLogStream = rfs('access.log', {
    interval: '1d',
    path: logDirectory,

});
app.use(morgan('combined', {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 400
}));

//SECURITY
app.use(helmet());

//Enable CORS
app.use(cors());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Cookie handling
app.use(cookieParser());

//Session handling
app.use(session({
    secret: 'YOUR_SECRET_KEY',
    resave: true,
    saveUninitialized: true
}));

//Passport AUTH
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//User router
app.use('/user', userRouter);

//ToDo router
app.use('/todo', todoRouter);

//Start server
app.listen(port);
console.log("It's works on port: " + port);

// Start Browser - Sync
// if (app.get('env') === 'development') {
//     const browserSync = require('browser-sync')
//     const config = {
//         files: ['views/**/*.html'],
//         logLevel: 'info',
//         logSnippet: false,
//         reloadDelay: 3000,
//         reloadOnRestart: true
//     }
//     const bs = browserSync(config)
//     app.use(require('connect-browser-sync')(bs))
// }