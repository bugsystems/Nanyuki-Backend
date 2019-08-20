// import User from '../sequelize';
// import jwtSecret from '../config/jwtConfig';
// import jwt from 'jsonwebtoken';
// import passport from 'passport';
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const jwtSecret = require('../config/jwtConfig');

module.exports = app => {
    app.get('loginUser', (req, res, next) => {
        passport.authenticate('login', (err, user, info) => {
            if(err) {
                console.log(err);
            }
            if(info != undefined) {
                console.log(info.message);
                res.send(info.message);
            } else {
                req.logIn(user, err =>{
                    User.findOne({
                        where: {
                            username: user.username,
                        },
                    }).then(user => {
                        const token = jwt.sign({is: user.username}, jwtSecret.secret);
                        res.status(200).send({
                            auth: true,
                            token: token,
                            message: 'User found & logged in',
                        });
                    });
                });
            }
        })(req, res, next);
    });
};