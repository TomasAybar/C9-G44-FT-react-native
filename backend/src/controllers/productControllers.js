const productModel = require('../models/productModel')

const userModel = require('../models/userModel')

const productControllers = {
	getProducts: async (req, res) => {
		let products
		let error = null

		try {
			products = await productModel.find()

			if (products.length <= 0) {
				res.json({
					success: true,
					message: 'no hay productos',
				})
			}
		} catch (error) {
			res.json({
				success: false,
				message: error,
				console: console.log(error),
			})
		}
		res.json({
			response: error ? 'ERROR' : products,
			success: error ? false : true,
			error: error,
		})
	},

	addProduct: async (req, res) => {
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

		const newProduct = await new productModel({
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
		})

		await newProduct.save()

		res.json({
			success: true,
			message: `Producto agregado correctamente`,
			product: newProduct,
		})
	},

	removeProduct: async (req, res) => {
		if (req.user.role !== 'admin') {
			return res.status(401).send('Unauthorized')
		}

		if (req.params.id === ':id') {
			return res.status(400).send('id invalido')
		}

		try {
			let product = await productModel.findOneAndDelete({ _id: req.params.id })

			if (product) {
				// return res.status(200).json({
				//     success: true,
				//     message: `producto eliminado`,
				//     product: product
				// });

				res.json({
					success: true,
					message: `producto eliminado`,
					product: product,
				})
			} else {
				return res.status(400).send('id invalido')
			}
		} catch (error) {
			return res.status(400).send('id invalido')
		}
	},

	modifyProduct: async (req, res) => {
		if (req.user.role !== 'admin') {
			return res.status(401).send('Unauthorized')
		}

		if (req.params.id === ':id') {
			return res.status(400).send('id invalido')
		}

		try {
			let product = await productModel.findOneAndUpdate(
				{ _id: req.params.id },
				req.body,
				{ new: true }
			)

			res.json({
				success: true,
				message: `Producto modificado correctamente`,
				product: product,
			})
		} catch (error) {
			res.json({
				success: false,
				error: 'informacion enviada invalida',
			})
		}
	},

	getOneProduct: async (req, res) => {
		try {
			let product = await productModel.findById(req.params.id)

			if (product) {
				res.json({
					success: true,
					product: product,
				})
			} else {
				res.json({
					success: false,
					message: 'id invalido',
				})
			}
		} catch (error) {
			res.json({
				success: false,
				error: 'usuario no encontrado',
			})
		}
	},
}

module.exports = productControllers
