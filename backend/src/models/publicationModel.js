const mongoose = require('mongoose')

const publicationSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'users' },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    heading: { type: String, required: true },
    image: { type: String, required: true },
    size: { type: String },
    color: { type: String, required: true },
    state: { type: String, required: true },
    description: { type: String, required: true },
}, {
    versionKey: false
})

module.exports = mongoose.model('publications', publicationSchema)
