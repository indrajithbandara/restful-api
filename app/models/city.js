// app/models/city.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CitySchema = new Schema({
    name: String,
    restaurants : [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }]
});

module.exports = mongoose.model('City', CitySchema);
