const publicationModel = require('../models/publicationModel')

const publicationControllers = {
	getPublication: async (req, res) => {
		let publications
		let error = null

		try {
			publications = await publicationModel.find()
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : publications,
			success: error ? false : true,
			error: error,
		})
	},

	addPublication: async (req, res) => {
		if (req.user.role !== 'admin') {
			return res.status(401).send('Unauthorized')
		}

		let {
			name,
			brand,
			price,
			category,
			description,
			type,
			heading,
			image,
			size,
			color,
			state,
		} = req.body

		if (
			!name ||
			!brand ||
			!price ||
			!category ||
			!description ||
			!type ||
			!heading ||
			!image ||
			!color ||
			!state
		) {
			res.json({
				message: `Faltan datos por enviar`,
			})
		}

		let newPublication
		let error = null

		try {
			newPublication = await new publicationModel({
				name,
				brand,
				price,
				category,
				description,
				type,
				heading,
				image,
				size,
				color,
				state,
			}).save()
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : newPublication,
			success: error ? false : true,
			message: error ? 'ERROR' : 'Publicacion agregada correctamente',
			error: error,
		})
	},

	removePublication: async (req, res) => {
		if (req.user.role !== 'admin') {
			return res.status(401).send('Unauthorized')
		}

		if (req.params.id === ':id') {
			return res.status(400).send('id invalido')
		}

		let publication
		let error = null

		try {
			publication = await publicationModel.findOneAndDelete({
				_id: req.params.id,
			})
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : publication,
			success: error ? false : true,
			error: error,
		})
	},

	updatePublication: async (req, res) => {
		if (req.user.role !== 'admin') {
			return res.status(401).send('Unauthorized')
		}

		let publication
		let error = null

		try {
			publication = await publicationModel.findOneAndUpdate(
				{ _id: req.params.id },
				req.body,
				{ new: true }
			)
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : publication,
			success: error ? false : true,
			error: error,
		})
	},

	getOnePublication: async (req, res) => {
		let publication
		let error = null

		try {
			publication = await publicationModel.findById(req.params.id)
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : publication,
			success: error ? false : true,
			error: error,
		})
	},
}

module.exports = publicationControllers
