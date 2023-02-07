
const Router = require('express').Router(); // uso el creador de rutas de express

const { getUsers, signinUser, signupUser, removeUser } = require('../controllers/userControllers'); // traigo a mis controladores

// asocio mis controladores con las rutas usando el metodo enrutador de express
Router.get('/users', getUsers)
Router.post('/signin', signinUser)
Router.post('/signup', signupUser)
Router.delete('/user/:id', removeUser)

module.exports = Router;