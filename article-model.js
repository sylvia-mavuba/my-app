var mongoose = require('mongoose');

var Articles = mongoose.model('Articles', {
    text: String,
    autor: String,
    title: String
});


module.exports.Articles = Articles;
