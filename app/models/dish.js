// app/models/dish.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DishSchema = new Schema({
    name: String,
    cuisine: String
});

/*register middleware to clean references
 *these are called 'hooks'
 *document hooks only work when using 'remove' on document, not model
 */
DishSchema.pre('remove', function(next){
    console.log('removing dish from associated restaurants...\n');
    this.model('Restaurant').update(
        {dishes: this._id},
        {$pull: { dishes: this._id}},
        {multi: true},
        next
    );
});

module.exports = mongoose.model('Dish', DishSchema);
