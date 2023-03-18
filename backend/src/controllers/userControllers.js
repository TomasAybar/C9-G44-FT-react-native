// const UserModel = require('../models/userModel');
const { User: UserModel, UserInfo } = require('../models/userModel')
const {
	MethodTRF: MethodTRFModel,
	MethodBV: MethodBVModel,
} = require('../models/paymentMethodModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/config')
const { uploadImage, deleteImage } = require('../libs/cloudinary')
const fs = require('fs-extra')

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
			})
		}
	},

	addInformationUser: async (req, res) => {
		let { phone, address } = req.body

		let error
		let message
		let infoUser
		let image

		if (!phone || !address) {
			message = `Faltan datos por enviar`
		}

		if (req.params.id === ':id') {
			message = `id invalido`
		}

		try {
			if (req.files.image) {
				const resultImage = await uploadImage(req.files.image.tempFilePath)

				await fs.remove(req.files.image.tempFilePath)

				image = {
					url: resultImage.secure_url,
					public_id: resultImage.public_id,
				}
			}

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
			users = await UserInfo.find()
				.populate('user')
				.populate('paymentMethod.trf')
				.populate('paymentMethod.bv')
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

			if (user.image.public_id) {
				await deleteImage(user.image.public_id)
			}
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : user,
			success: error ? false : true,
			error: error,
		})
	},

	addPaymentTRF: async (req, res) => {
		let { name, cbu_alias, cuit_cuil } = req.body

		let error
		let message
		let paymentTRF

		if (!name || !cbu_alias || !cuit_cuil) {
			message = `Faltan datos por enviar`
		}

		if (req.params.id === ':id') {
			message = `id invalido`
		}

		try {
			paymentTRF = await MethodTRFModel({
				name,
				cbu_alias,
				cuit_cuil,
				user: req.params.id,
			}).save()

			message = `Informacion agregada con exito`

			await UserInfo.findOneAndUpdate(
				{ user: req.params.id },
				{ $push: { paymentMethod: paymentTRF._id } },
				{ new: true }
			)
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : paymentTRF,
			success: error ? false : true,
			message: message,
			error: error,
		})
	},

	addPaymentBV: async (req, res) => {
		let { email, name, cvu_alias } = req.body

		let error
		let message
		let paymentBV

		if (!email || !name || !cvu_alias) {
			message = `Faltan datos por enviar`
		}

		if (req.params.id === ':id') {
			message = `id invalido`
		}

		try {
			paymentBV = await MethodBVModel({
				name,
				email,
				cvu_alias,
				user: req.params.id,
			}).save()

			message = `Informacion agregada con exito`

			await UserInfo.findOneAndUpdate(
				{ user: req.params.id },
				{ $push: { paymentMethod: paymentBV._id } },
				{ new: true }
			)
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : paymentBV,
			success: error ? false : true,
			message: message,
			error: error,
		})
	},

	addPayment: async (req, res) => {
		let { paymentBV, paymentTRF } = req.body

		let error
		let message
		let payment

		if (req.params.id === ':id') {
			message = 'id invalido'
		}

		try {
			if (paymentBV) {
				console.log(paymentBV)
				payment = await MethodBVModel({
					user: req.params.id,
					email: paymentBV.email,
					name: paymentBV.name,
					cvu_alias: paymentBV.cvu_alias,
				}).save()

				paymentMethod = {
					bv: payment._id,
				}

				await UserInfo.findOneAndUpdate(
					{ user: req.params.id },
					{ $push: { paymentMethod: paymentMethod } },
					{ new: true }
				)

				message = `Informacion agregada con exito`
			}

			if (paymentTRF) {
				console.log(paymentTRF)
				payment = await MethodTRFModel({
					user: req.params.id,
					name: paymentTRF.name,
					cvu_alias: paymentTRF.cvu_alias,
					cuit_cuil: paymentTRF.cuit_cuil,
				}).save()

				paymentMethod = {
					trf: payment._id,
				}

				await UserInfo.findOneAndUpdate(
					{ user: req.params.id },
					{ $push: { paymentMethod: paymentMethod } },
					{ new: true }
				)

				message = `Informacion agregada con exito`
			}
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : payment,
			success: error ? false : true,
			message: message,
			error: error,
		})
	},

	getPaymentById: async (req, res) => {
		let userInfo
		let error

		try {
			userInfo = await UserInfo.findOne({ user: req.params.id })
				.populate('paymentMethod.trf')
				.populate('paymentMethod.bv')
		} catch (err) {
			error = err
		}

		res.json({
			response: error ? 'ERROR' : userInfo.paymentMethod,
			success: error ? false : true,
			error: error,
		})
	},
}

module.exports = userControllers
