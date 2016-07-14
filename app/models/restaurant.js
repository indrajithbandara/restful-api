// app/models/restaurant.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    name: String,
    description: String,
    address: String,
    rating: Number,
    dishes : [{ type: Schema.Types.ObjectId, ref: 'Dish' }]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
