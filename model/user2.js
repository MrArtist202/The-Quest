const mongoose = require('mongoose');
let sign = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    pass:{type:String}
});

module.exports = mongoose.model("user2", sign);