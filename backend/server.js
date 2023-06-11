require('dotenv').config()
require('./src/config/database')
const { PORT } = require('./src/config/config')
const {
	productRoutes,
	userRoutes,
	favoriteRoutes,
	publicationRoutes,
} = require('./src/routes/routes')

const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: './upload',
	})
)

//routing
app.use('/api', productRoutes)
app.use('/api', userRoutes)
app.use('/api', favoriteRoutes)
app.use('/api', publicationRoutes)

app.set('port', PORT)
app.get('/', (req, res) => res.send('EL SERVIDOR ESTA FUNCIONANDO'))

app.listen(app.get('port'), () =>
	console.log('SERVIDOR CORRIENDO EN PUERTO: ' + app.get('port'))
)
