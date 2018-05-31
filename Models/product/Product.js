var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    title: {type:String},
    description: {type:String},
    price: Number
});
mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');