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
      flag.push({ question: jsonFlag[i].flag , reponse: jsonFlag[i].name}); //dictionnaire contenant les noms et drapeaux des pays
    };

    //tirage au sort sans remise du noms des pays pour une session de quizz avec 10 questions
    var nameQuestion = [];
    var exclure = [];
    var falseNameDispo = [];

    //tirage au sort sans remise
    for (var i = 0; i<10; i++){
      var longueur = flag.length;
    	tirage = Math.floor(Math.random() * longueur);
    	nameQuestion[i] = flag[tirage];
    	exclure.push(flag.splice(tirage,1));
      falseNameDispo[i] = name.splice(exclure,1);
      nameQuestion[i].faux1 = falseNameDispo[i][0];
    };
    //ajout d'une colonne de réponses fausses



    console.log(falseNameDispo);
    //console.log(nameQuestion);
    res.send(nameQuestion);
  });
});

module.exports = app;
