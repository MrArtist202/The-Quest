const mongoose = require('mongoose');
let schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, unique: true},
    message: {type: String, required:true}
});
module.exports = mongoose.model('user', schema);