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

    //tirage au sort sans remise du noms des pays pour une session de quizz avec 10 questions
    var nameQuestion = new Array();
    var exclure = new Array();
    var falseNameDispo = new Array();
    //création de la liste des pays et drapeaux disponibles pour faire le tirage
    var nameDispo = new Array();
    for (i in flag){
      nameDispo.push(flag[i]);
    };
    //tirage au sort sans remise
    for (var i = 0; i<10; i++){
      var longueur = nameDispo.length;
    	tirage = Math.floor(Math.random() * longueur);
    	nameQuestion[i] = nameDispo[tirage];
    	exclure.push(nameDispo.splice(tirage,1));
      falseNameDispo[i] = nameDispo.splice(exclure,1);
      nameQuestion[i].faux1 = falseNameDispo[i][0].key + i;
    };
    //ajout d'une colonne de réponses fausses



    console.log(falseNameDispo);
    res.send(nameQuestion);
  });
});

module.exports = app;
