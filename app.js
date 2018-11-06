const request = require('request');
const express = require('express');
const app = express();

app.get('/flag', function(req, res){
  request('https://restcountries.eu/rest/v2/region/europe', function(error, reponse, body){
    //définir des array pour récupérer les noms et les drapeaux
    var flag = [];
    var name = [];

    //définir la variable contenant le JSON récupéré par la requête
    jsonFlag = JSON.parse(body);
    //parcourir chaque élément du JSON et extraire le nom et le drapeau du pays
    for (i in jsonFlag) {
      name.push(jsonFlag[i].name); //liste contenant les noms des pays
      flag.push({ key: jsonFlag[i].name , value: jsonFlag[i].flag}); //dictionnaire contenant les noms et drapeaux des pays
    };
    //console.log(flag)
    //res.send(name) //affiche la liste des noms de pays

    var nbQuestion = [];
    for (i=0; i<10; i++){
    nbQuestion[i] = Math.floor(Math.random()*name.length);
  };
    console.log(nbQuestion);
    res.send(nbQuestion);
  });
});

module.exports = app;
