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

RestaurantSchema.pre('remove', function(next){
    console.log('removing restaurant from associated cities...\n');
    this.model('City').update(
        {restaurants: {$in: this.restaurants}},
        {$pull: { restaurants: this._id}},
        {multi: true},
        next
    );
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
