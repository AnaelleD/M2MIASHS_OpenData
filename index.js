const express = require('express');

const app = express()

app.get('/', function(req, res){
  res.send('Hello World')
})

app.getElementsByClassName('/toto', function(req, res){
  res.send('Hello Toto')
})

port = process.env.PORT || 8080

app.listen(port, function(){
  console.log('Exemple app listening on port' + port)
})
