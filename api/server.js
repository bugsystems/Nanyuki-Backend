import express from 'express';
import Cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan'
import passport from 'passport';
const app = express();

const API_PORT = process.env.API_PORT || 9000;

require ('./config/passport');

app.use (Cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());

require('./routes/loginUser')(app);
require('./routes/findUsers')(app);

app.listen(API_PORT, () => console.log('Listening on port ${API_PORT}'));

module.exports = app;
