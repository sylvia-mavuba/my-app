//---------------
//----CONFIG----
//--------------//
var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var compression = require('compression');

var port = process.env.PORT || 4000;
//var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/articles'; --> marche

//---- View engine setup
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname, '/build')));
app.use(express.static('public'));
app.use(compression());


// mongoose.connect(mongoUri, function(err, res) {
//   if (err) console.log('ERROR connecting to: ' + mongoUri + '. ' + err);   --> marche
//   else console.log ('Successfully connected to: ' + mongoUri);
// });


app.get('/', function (req, res) {
    res.render('main', { title: 'My blog', message: 'Hello World' });
});

//-- Je veux pouvoir me connecter à plusieurs collections
var connectionBddArticles      = mongoose.createConnection('mongodb://localhost/articles');
var connectionBddRestaurant     = mongoose.createConnection('mongodb://localhost/restaurants');


var ModelArticles    = connectionBddArticles.model('Model', new mongoose.Schema({
    text: String,
    autor: String,
    title: String
}));

var ModelRestaurant    = connectionBddRestaurant.model('Model', new mongoose.Schema({
  title : { type : String, default : 'model in testB database' }
}));


//-----------------------
//------API Articles-----
//----------------------//
//var Articles = require('./article-model.js').Articles;  --> marche

app.get('/api/articles', function (req, res) {
  ModelArticles.find({}, function(error, articles){
    if (error) throw error;
    else res.json({ 'articles': articles });
  });
});

app.post('/api/articles', function (req, res) {
    ModelArticles.create({
        title: req.body.title,
        text: req.body.text,
        autor: req.body.autor
    }, function (err, article) {
        if (err)
            res.send(err);

        ModelArticles.find(function (err, articles) {
            if (err)
                res.send(err);
            res.json(articles);
        });
    });
});

app.delete('/api/articles/:article_id', function (req, res) {
    ModelArticles.remove({
        _id: req.params.article_id
    }, function (err, data) {
        if (err) { res.send(err); }

        ModelArticles.find(function (err, articles) {
            if (err) { res.send(err); }
            res.json(articles);
        });
    });
});


//-----------------------
//------API Articles-----
//----------------------//
//var Restaurants = require('./restaurant-model.js').Restaurants;

// app.get('api/restaurants', function (req, res) {
//     Restaurants.find({}, function(error, restaurants){
//       if (error) throw error;
//       else res.json({ 'restaurants': restaurants });
//     });
// });

app.get('/api/restaurants', function (req, res) {
  ModelRestaurant.find({}, function(error, data){
    if (error) throw error;
    else res.json({ 'restaurants': data });
  });
});
//------------------
//-----CONNECT------
//----------------//
app.listen(port, function () {
  console.log('Example app listening on port!' + port);
});
