const request = require('request');
const express = require('express');
const app = express();

app.get('/flag', function(req, res){
  request('https://restcountries.eu/rest/v2/region/europe', function(error, reponse, body){
    //console.log(body)

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

    //tirage au sort sans remise du noms des pays pour une session de quizz avec 10 questions
  //  function (){
      var nameQuestion = new Array();
      var nameDispo = new Array();
      for (i in flag){
        nameDispo.push(flag[i]);
      };

  //  }
    //console.log(nameDispo)

    for (var i = 0; i<10; i++)
    	{
      var longueur = nameDispo.length;
    	tirage = Math.floor(Math.random() * longueur);
    	nameQuestion[i] = nameDispo[tirage];
    	nameDispo.splice(tirage,1);
    };
    //console.log(nameDispo.length)

    //tirage au sort avec remise
    /*var nameQuestion = [];
    for (i=0; i<10; i++){
      nameQuestion[i] = Math.floor(Math.random()*name.length);
    };*/

    //console.log(nameQuestion);
    res.send(nameQuestion);


  });
});

module.exports = app;
