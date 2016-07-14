// app/models/dish.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    name: String,
    description: String,
    address: String,
    rating: Number
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
