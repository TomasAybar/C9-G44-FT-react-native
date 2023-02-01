const mongoose = require('mongoose'); // me proporciona funciones para poder conectarme con la base de datos

mongoose.set('strictQuery', false); // permite que se me creen objetos en mi base de datos exatamente igual a como lo defino en el modelo

mongoose.connect(process.env.MONGO, {
    useUnifiedTopology: true, // usa el ultimo motor de mongo como default
    useNewUrlParser: true, // si no funciona el ultimo, intenta usar el anterior a este
})

    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))
