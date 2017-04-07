var mongoose = require('mongoose');

var Articles = mongoose.model('Articles', {
    text: String
});


module.exports.Articles = Articles;
