/*
var cats = require("./pets.js").catGoes;
var dogs = require("./pets.js").dogGoes;

cats();
dogs();*/

//Express
// inspiration_app/app.js

var express = require('express'); 
var exphbs  = require('express-handlebars');

var app = express();
app.engine('handlebars', exphbs({
	defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {   
	res.render('home'); });
app.use(express.static(__dirname+ '/public'));

app.listen(3000, function () {   
	console.log('Inspiration app listening on port 3000!'); });

app.get('/about', function (req, res) {   
	res.render('about'); }); 
app.get('/inspiration', function (req, res) {   
	res.render('inspiration'); });
