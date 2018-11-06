const request = require('request') // appeler le module "request"
const Film = {} 


Film.getFilm = function(res, titrefilm){
     
      url = 'http://www.omdbapi.com/?t='+ titrefilm +'&apikey=25f31d56' // définir l'url du film d'OMDB 
      
      console.log("mon url est : " + url )

      request( url, function(error, response, body){
        //console.log("toutes les infos sur le films sont: " +body)
        jsonomdb = JSON.parse(body) // parcourir le json contenu dans le body de la page html

        // afficher les erreurs
        if(!error)
        {
          actors = jsonomdb.Actors // récupérer la valeur de la clef "Actors" du jsonomdb
          var splt_act = actors.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
          var Actor = splt_act[0] // ne récupérer que le premier acteur de la liste

          // Définir un 1er acteur fictif
          actors_fictif1 = jsonomdb.Actors
          var splt_act_fictif1 = actors_fictif1.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
          var Actor_fictif1 = splt_act_fictif1[1] // ne récupérer que le premier acteur de la liste
      
          // Définir un 2ème acteur fictif
          actors_fictif2 = jsonomdb.Actors
          var splt_act_fictif2 = actors_fictif2.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
          var Actor_fictif2 = splt_act_fictif2[2] // ne récupérer que le premier acteur de la liste

          // Définir le titre du film
          Title = jsonomdb.Title // récupérer la valeur de la clef "Title" du jsonomdb

          //console.log(Actor)
          //console.log(Title)
          
          // concaténer les deux variables 
          var monfilm =  "Le rôle principal du film : <b>" +Title + "</b> </br> est interprété par : <b>" +Actor+ "</b> ou : <b>" +Actor_fictif1+ " </b> ou : <b> " +Actor_fictif2+ "</b>" 

          // envoyer le résultat au client (navigateur) 
          res.send(monfilm) 
        } 
        
        else console.log("error : " + error)
      }
    
    )
}  

module.exports = Film

