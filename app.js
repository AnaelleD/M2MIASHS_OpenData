const request = require('request')
const express = require('express')
const app = express()

//app.use((req, res, next) => {
  //res.status(200).json({
    //message: 'It works!'
//  });
//});

app.get('/flag', function(req, res){
  request('https://restcountries.eu/rest/v2/region/europe', function(error, reponse, body){
    console.log(body)
    res.send(body)
    jsonflag = JSON.parse(body)
    flag = jsonflag.flag
    name = jsonflag.name
    var lsflag = flag.split(",")
    //var lsname = name.split(",")
    console.log(lsflag[0])
  })
})

module.exports = app
