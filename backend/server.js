require('dotenv').config();
require('./src/config/database');
const { PORT } = require('./src/config/config');
const { productRoutes, userRoutes, favoriteRoutes } = require('./src/routes/routes');


const express = require('express');
const cors = require('cors');
const app = express();


// middleware
app.use(cors());
app.use(express.json());

//routing
app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', favoriteRoutes);

app.set('port', PORT);
app.get('/', (req, res) => res.send('EL SERVIDOR ESTA FUNCIONANDO'));

app.listen(app.get('port'), () => console.log('SERVIDOR CORRIENDO EN PUERTO: ' + app.get('port')));
