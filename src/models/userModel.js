const mongoose = require('mongoose'); // usamos sus metodos contructores

const userSchema = new mongoose.Schema({ // creo un nuevo esquema con las siguientes caracteristicas
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photoUrl: { type: String, required: true },
})

const User = mongoose.model('users', userSchema); // se conecta con la coleccion users de la base de datos en mongo, y se pasa por esquema lo que definimos

module.exports = User; // este modelo lo exportamos para utilizarlo en los controladores