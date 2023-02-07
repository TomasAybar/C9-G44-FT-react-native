
const Router = require('express').Router(); // uso el creador de rutas de express
const passport = require('../config/passport');

const { getUsers, signinUser, signupUser, removeUser } = require('../controllers/userControllers'); // traigo a mis controladores

// asocio mis controladores con las rutas usando el metodo enrutador de express
// aplico passport para autenticacion de usuario
Router.get('/users', passport.authenticate('jwt', { session: false }), getUsers)
Router.post('/signin', signinUser)
Router.post('/signup', signupUser)
Router.delete('/user/:id', passport.authenticate('jwt', { session: false }), removeUser)

module.exports = Router;