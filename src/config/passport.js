const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt

const UserModel = require('../models/userModel');
const { jwtSecret } = require('./config');

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
},
    async (jwt_payload, done) => {

        UserModel.findOne({ _id: jwt_payload.id })

        try {
            const user = await UserModel.findOne({ _id: jwt_payload.id })
            if (user) {

                return done(null, user)
            }
            else {
                return done(null, false);
            }

        } catch (error) {
            console.log(error)
            return done(error, false)
        }

    }))