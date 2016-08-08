// app/models/restaurant.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    name: String,
    description: String,
    address: String,
    rating: Number,
    dishes : [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
    owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

/*register middleware to clean references
 *these are called 'hooks'
 *document hooks only work when using 'remove' on document, not model
 */
RestaurantSchema.pre('remove', function(next){
    console.log('removing restaurant from associated cities...\n');
    this.model('City').update(
        {restaurants: this._id},
        {$pull: { restaurants: this._id}},
        {multi: true},
        next
    );
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
