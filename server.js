require('dotenv').config(); // libreria que configura las variables de entorno del archivo .env
require('./src/config/database'); // archivo donde esta la conexion con la base de datos MongoDB


const express = require('express');
const cors = require('cors'); // permite intercambiar recursos entre diferentes dominios, ejemplo: localhost:8000 y localhost:4000
const Router = require('./src/routes/routes'); // Archivo donde tengo mis rutas definidas
const app = express(); // framework que proporciona caracteristicas para desarrollar apps 


// middlewate => es como el puente entre el sistema operativo y la api
app.use(cors()); // para que se puede hacer peticion de datos por front
app.use(express.json()); // aplicar json al body del pedido
app.use('/api', Router); // le asigno el nombre a mi ruta => http://localhost:8000/api/users

const PORT = process.env.PORT || 8000; // seteo el puerto en 8000 => localhost:8000

app.set('port', PORT); // seteo el puerto
app.get('/', (req, res) => res.send('EL SERVIDOR ESTA FUNCIONANDO')); // envio un mensaje al navegador

app.listen(app.get('port'), () => console.log( 'SERVIDOR CORRIENDO EN PUERTO: ' + app.get('port') ) ); // escucho el puerto seteado y lo levanto 
