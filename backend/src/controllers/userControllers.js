// const UserModel = require('../models/userModel');
const { User: UserModel, UserInfo } = require('../models/userModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/config')

const userControllers = {
	getUsers: async (req, res) => {
		let users
		let error = null

		try {
			users = await UserModel.find().populate('information')
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : users,
			success: error ? false : true,
			error: error,
		})
	},

	signinUser: async (req, res) => {
		let { email, password } = req.body

		let error
		let message
		let token
		let userData

		if (!email || !password) {
			// si no recibe nada, devuelve error

			message = `Faltan datos por enviar`
		}

		try {
			const user = await UserModel.findOne({ email: email }).populate(
				'information'
			)

			if (!user) {
				// no existe el usuario

				message = `Usuario o contraseña incorrecta`
			} else {
				// existe el usuario

				let comparePass = bcryptjs.compareSync(password, user.password)

				if (comparePass) {
					userData = {
						id: user._id,
						name: user.name,
						email: user.email,
						information: user.information,
					}

					await user.save()

					token = jwt.sign({ ...userData }, jwtSecret, {
						expiresIn: 60 * 60 * 24,
					})

					message = `¡Bienvenido ${userData.name}!`
				} else {
					message = `Usuario o contraseña incorrecta`
				}
			}
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : { userData, token },
			message: error ? 'ERROR' : message,
			success: error ? false : true,
			error: error,
			console: console.log(error),
		})
	},

	signupUser: async (req, res) => {
		let { name, email, password } = req.body

		let newUser
		let error
		let message

		try {
			const userExistEmail = await UserModel.findOne({ email })

			if (!userExistEmail) {
				const hashWord = bcryptjs.hashSync(password, 10)

				newUser = await new UserModel({
					name,
					email,
					password: hashWord,
					role: 'user',
				}).save()

				message = `Te has registrado correctamente`
			} else {
				// ya existe

				message = `El email "${email}" ya se encuentra registrado en el sistema`
			}
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : newUser,
			message: error ? 'ERROR' : message,
			success: error ? false : true,
			error: error,
			console: console.log(error),
		})
	},

	removeUser: async (req, res) => {
		// if (req.user.role !== 'admin') {
		// 	return res.status(401).send('Unauthorized')
		// }

		// if (req.params.id === ':id') {
		// 	return res.status(400).send('id invalido')
		// }

		try {
			let user = await UserModel.findOneAndDelete({ _id: req.params.id })

			if (user) {
				res.json({
					success: true,
					message: `Usuario eliminado`,
					user: user,
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
				error: error,
				console: console.log(error),
			})
		}
	},

	addInformationUser: async (req, res) => {
		let { phone, address, image } = req.body

		if (!phone || !address || !image) {
			message = `Faltan datos por enviar`
		}

		if (req.params.id === ':id') {
			message = `id invalido`
		}

		let error
		let message
		let infoUser

		try {
			infoUser = await new UserInfo({
				phone,
				address,
				image,
				user: req.params.id,
			}).save()
			message = `Informacion agregada con exito`

			await UserModel.findOneAndUpdate(
				{ _id: req.params.id },
				{ $push: { information: infoUser._id } },
				{ new: true }
			)
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : infoUser,
			success: error ? false : true,
			message: message,
			error: error,
		})
	},

	getInfoUsers: async (req, res) => {
		let users
		let error = null

		try {
			users = await UserInfo.find().populate('user')
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : users,
			success: error ? false : true,
			error: error,
		})
	},
	removeInfoUser: async (req, res) => {
		let user
		let error = null

		try {
			user = await UserInfo.findOneAndDelete({ _id: req.params.id })
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : user,
			success: error ? false : true,
			error: error,
			console: console.log(error),
		})
	},
}

module.exports = userControllers
