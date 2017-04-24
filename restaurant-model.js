// var mongoose = require('mongoose');
//
// var Restaurants = mongoose.model('Restaurants', {
//     name: String,
//     city: String,
//     description: String,
//     rating: Number,
//     address: String
// });
//
//
// module.exports.Restaurants = Restaurants;

var mongoose = require('mongoose');

var Restaurant = mongoose.model('Restaurant', {

    "name": String,
    "tags": String,
    "pictureURL": String,
    "date": { type: Date, default: Date.now },
    "address": String,
    "city": String,
    "area": String
});

module.exports.Restaurant = Restaurant;
