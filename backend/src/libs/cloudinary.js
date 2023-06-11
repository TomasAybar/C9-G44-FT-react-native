const { v2: cloudinary } = require('cloudinary')

cloudinary.config({
	cloud_name: 'dzafj9w3r',
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadImage = async (filePath) => {
	return await cloudinary.uploader.upload(filePath, {
		folder: 'EcoModa',
	})
}

const deleteImage = async (id) => {
	return await cloudinary.uploader.destroy(id)
}

module.exports = { uploadImage, deleteImage }
