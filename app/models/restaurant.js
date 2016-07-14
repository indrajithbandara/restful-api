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

RestaurantSchema.pre('remove', {doc: true} function(next){
    console.log('removing restaurant from associated cities...\n');
    this.model('City').update(
        {restaurants: this._id},
        {$pull: { "restaurants": {_id : this._id}}},
        {multi: true},
        next
    );
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
