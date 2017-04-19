var mongoose = require('mongoose');


var Articles = new mongoose.Schema({
    text: String,
    done: Boolean
});


module.exports.Articles = Articles;
