const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    brand: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
    type: { type: String, require: true },
    heading: { type: String, require: true },
    image: { type: String, require: true },
    size: { type: String, require: false },
    color: { type: String, require: true },
    state: { type: String, require: true },
    description: { type: String, require: false },
})

module.exports = mongoose.model('products', productSchema);