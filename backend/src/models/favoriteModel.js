const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Types.ObjectId, ref: 'users' },
		publication: { type: mongoose.Types.ObjectId, ref: 'publications' },
	},
	{
		versionKey: false,
	}
)

module.exports = mongoose.model('favorites', favoriteSchema)
