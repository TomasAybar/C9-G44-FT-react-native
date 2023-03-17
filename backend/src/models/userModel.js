const mongoose = require('mongoose')

const userInformationSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Types.ObjectId, ref: 'users' },
		phone: { type: String },
		address: { type: String },
		image: {
			url: String,
			public_id: String,
		},
		paymentMethod: [
			{ type: mongoose.Types.ObjectId, ref: 'methodsTRF' },
			{ type: mongoose.Types.ObjectId, ref: 'methodsBV' },
		],
	},
	{
		versionKey: false,
	}
)

const UserInfo = mongoose.model('userInfo', userInformationSchema)

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		role: { type: String },
		information: { type: mongoose.Types.ObjectId, ref: 'userInfo' },
	},
	{
		versionKey: false,
	}
)

const User = mongoose.model('users', userSchema)

module.exports = { UserInfo, User }
