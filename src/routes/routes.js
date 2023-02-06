
const Router = require('express').Router(); // uso el creador de rutas de express

const { getUsers, addUser } = require('../controllers/userControllers'); // traigo a mis controladores

// asocio mis controladores con las rutas usando el metodo enrutador de express
Router.route('/users')
    .get(getUsers)
    .post(addUser)

module.exports = Router;