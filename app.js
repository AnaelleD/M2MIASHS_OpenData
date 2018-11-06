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
    //console.log(body)
    //res.send(body)
    var flag = [];
    var name = [];

    console.log(JSON.parse(body))
    jsonFlag = JSON.parse(body)
    for (i in jsonFlag) {
    //  jsonflag = JSON.parse(body[i])
      name.push(jsonFlag[i].name)
      flag.push({ key: jsonFlag[i].name , value: jsonFlag[i].flag});
    }
    console.log(flag)
    res.send(name)
  })
})

module.exports = app
