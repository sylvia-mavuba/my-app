var mongoose = require('mongoose');

var Articles = mongoose.model('Articles', {
    text: String,
    done: Boolean
});


module.exports.Articles = Articles;
