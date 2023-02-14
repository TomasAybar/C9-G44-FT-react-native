const mongoose = require('mongoose'); // me proporciona funciones para poder conectarme con la base de datos
const { DB } = require('../config/config');

mongoose.set('strictQuery', false); // permite que se me creen objetos en mi base de datos exatamente igual a como lo defino en el modelo

mongoose.connect(DB.URI, {
    useUnifiedTopology: true, // usa el ultimo motor de mongo como default
    useNewUrlParser: true, // si no funciona el ultimo, intenta usar el anterior a este
})

    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))
