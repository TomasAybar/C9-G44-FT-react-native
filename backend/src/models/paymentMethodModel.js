const mongoose = require('mongoose')

const methodTRFSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'users' },
    name: { type: String },
    cbu_alias: { type: String },
    cuit_cuil: { type: String },
}, {
    versionKey: false
})

const MethodTRF = mongoose.model('methodsTRF', methodTRFSchema)

const methodBVchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'users' },
    email: { type: String },
    name: { type: String },
    cvu_alias: { type: String },
}, {
    versionKey: false
})

const MethodBV = mongoose.model('methodsBV', methodBVchema)



module.exports = { MethodTRF, MethodBV }
