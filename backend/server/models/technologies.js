const mongoose = require('mongoose');
const {Schema} = mongoose;

const technologiesSchema  = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true},
    skill: {type: String, required: true}
})

module.exports = mongoose.model('technologies', technologiesSchema);