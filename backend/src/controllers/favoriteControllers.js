const userModel = require('../models/userModel')
const productModel = require('../models/productModel')

const favoriteControllers = {
	addOrRemoveFavorite: async (req, res) => {
		const userID = req.params.userid
		const productID = req.params.productid

		let error = null
		let message = null
		let inFavorite = null

		try {
			let user = await userModel.find({ _id: userID })

			user = user[0]

			if (user.favorites.includes(productID)) {
				// si encuentra el producto dentro del usuario

				user.favorites.splice(user.favorites.indexOf(productID), 1) // remuevo el producto del array

				message = 'Eliminado de favoritos'
				inFavorite = false
			} else {
				user.favorites.push(productID) // agrego el producto al array

				message = 'Agregado a favoritos'
				inFavorite = true
			}

			await user.save()

			res.json({
				success: error ? false : true,
				error: error,
				message,
				product: productID,
				inFavorite,
			})
		} catch (error) {
			res.json({
				response: 'ERROR',
				success: error ? false : true,
				error: error,
				console: console.log(error),
			})
		}
	},

	getFavoriteByUser: async (req, res) => {
		const userID = req.params.id // id del usuario

		let favorites
		let error = null

		try {
			let user = await userModel.find({ _id: userID }).populate('favorites')

			favorites = user[0].favorites
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : favorites,
			success: error ? false : true,
			error: error,
		})
	},
	getFavoriteByUser2: async (req, res) => {
		const userID = req.params.userid // id del usuario

		let favorites
		let error = null

		try {
			favorites = await productModel.find({ userFavorites: userID })
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : favorites,
			success: error ? false : true,
			error: error,
		})
	},

	addOrRemoveFavorite2: async (req, res) => {
		const userID = req.params.userid
		const productID = req.params.productid

		// let favorites;
		let error = null
		let message = null
		let inFavorite = null

		try {
			let product = await productModel.find({ _id: productID })

			product = product[0]

			if (product.userFavorites.includes(userID)) {
				product.userFavorites.splice(product.userFavorites.indexOf(userID), 1)

				message = 'Eliminado de favoritos'
				inFavorite = false
			} else {
				product.userFavorites.push(userID)
				message = 'Agregado a favoritos'
				inFavorite = true
			}

			let favorites = await productModel.find({ userFavorites: userID })

			await product.save()
			// await favorites.save();

			res.json({
				success: error ? false : true,
				error: error,
				message,
				product: productID,
				inFavorite,
				favorites,
			})
		} catch (error) {
			res.json({
				response: 'ERROR',
				success: error ? false : true,
				error: error,
				console: console.log(error),
			})
		}
	},

	iconFavorite: async (req, res) => {
		const userID = req.params.userid
		const productID = req.params.productid

		let error = null
		let inFavorite = null

		try {
			let product = await productModel.find({ _id: productID })

			product = product[0]

			if (product) {
				if (product.userFavorites.includes(userID)) {
					inFavorite = true
				} else {
					inFavorite = false
				}

				res.json({
					success: error ? false : true,
					error: error,
					product: productID,
					user: userID,
					inFavorite,
				})
			} else {
				res.json({
					success: false,
					message: 'Producto no encontrado',
				})
			}
		} catch (error) {
			res.json({
				response: 'ERROR',
				success: error ? false : true,
				error: error,
				console: console.log(error),
			})
		}
	},
}

module.exports = favoriteControllers
