// app/models/dish.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DishSchema = new Schema({
    name: String,
    cuisine: String
});

DishSchema.pre('remove', function(next){
    this.model('Restaurant').update(
        {dishes: this._id},
        {$pull: {dishes: this._id}},
        {multi: true},
        next
    );
});

module.exports = mongoose.model('Dish', DishSchema);
