// app/models/dish.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DishSchema = new Schema({
    name: String,
    cuisine: String
});

module.exports = mongoose.model('Dish', DishSchema);
