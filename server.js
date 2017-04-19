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
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/articles';

//---- View engine setup
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname, '/build')));
app.use(express.static('public'));
app.use(compression());


mongoose.connect(mongoUri, function(err, res) {
  if (err) console.log('ERROR connecting to: ' + mongoUri + '. ' + err);
  else console.log ('Successfully connected to: ' + mongoUri);
});


app.get('/', function (req, res) {
    res.render('main', { title: 'My blog', message: 'Hello World' });
});

//----------------
//--PAGE ROUTE----
//--------------//
// app.get('/', function (req, res) {
//     res.render('main', { title: 'My blog', message: 'Hello World' });
// });
//
// app.get('/login', function (req, res) {
//     res.render('login', { title: 'Login ', message: 'Login page' });
// });
//
// app.get('/articles', function (req, res) {
//     res.render('articles', { title: 'Mes articles', message: 'Pages de mes articles' });
// });
//
// app.get('/restaurants', function (req, res) {
//     res.render('restaurants', { title: 'Mes restaurants ', message: 'Pages de mes restaurants favories' });
// });


// //--------------
// //-----API------
// //------------//
//
//*use mongoose to get all restaurants in the database
// app.get('/api/articles', function (req, res) {
//   Articles.find({}, function(error, data){
//     if (error) throw error;
//     else res.json({ 'articles': data });
//   });
// });


//------------------
//-----CONNECT------
//----------------//
app.listen(port, function () {
  console.log('Example app listening on port!' + port);
});
