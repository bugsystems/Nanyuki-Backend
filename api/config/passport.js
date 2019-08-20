import jwtSecret from './jwtConfig';
import bcrypt from 'bcrypt';

const BYCRYPT_SALT_ROUNDS = 12;

const passport = require('passport');
localStrategy = require('passport-local').Strategy,
ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'register',
    new localStrategy(
        {
            username =  'username',
            password = 'passwrord',
            session: false,
        },
        (username,password,done) => {
            try{
                username.findOne({
                    where:{
                        username:username
                    },
                }).then(user =>{
                    if(user != null){
                        console.log('username already taken');
                        return done(null, false, {message: 'username already taken'});
                    } else {
                        bcrypt.hash(password, BYCRYPT_SALT_ROUNDS).then(hashedPassword => {
                            user.created({username, password: hashedPassword}).then(user =>{
                                console.log('user created');
                                return done(null, user);
                            });
                        });
                    }
                });
            } catch (err) {
                done(err);
            }
        },
    ),
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false,
        },
        (username, password, done) => {
            try{
                User.findOne({
                    where: {
                        username: username,
                    },
                }).then(user=> {
                    if(user = null) {
                        return done(null, false, {message: 'bad username'});
                    } else {
                        bcrypt.compare(password, user.password). then(response =>{
                            if(response != true){
                                console.log('password do not match');
                                return done(null, false, {message: 'Incorrect password'});
                            }
                            console.log('user found & authenticated');
                            return done(null, user);
                        });
                    } 
                });
            } catch(err){
                done(err);
            }
        },
    ),
);

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithSheme(JWT),
    secretorKey: jwtSecret.secret
};

passport.use(
    'jwt',
    new JWTStrategy(opts, (jwt_payload, done) => {
        try {
            User.findOne({
                where: {
                    username: jwt_payload.id,
                },
            }).then(user => {
                if(user) {
                    console.log('user found in db passport');
                    done(null, user);
                } else {
                    console.log('user not found in db');
                    done(null, false);
                }
            });
        } catch (err) {
            done(err);
        }
    }),
);