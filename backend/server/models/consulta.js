const mongoose = require('mongoose');
const {Schema} = mongoose;

const consultaSchema  = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, required: true}
})

module.exports = mongoose.model('consulta', consultaSchema);