const express = require('express');
const mustache = require('mustache-express');
const characterz = require('./model/names.js');
console.log(characterz);
const app = express();

app.engine('mustache', mustache());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  console.log(characterz)
  let prople = characterz.starWars();
  res.render('index', {characterz: prople})
});

app.listen(5050, function(){
  console.log('Listening for PORT 5050')
});
