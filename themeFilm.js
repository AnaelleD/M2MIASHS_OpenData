const request = require('request') // appeler le module "request"
const Film = {} 
const acteurs = require('./actrices_acteurs.json') // appeler le fichier actrices_acteurs.json contenant les noms d'acteurs qui vont servir au tirage aléatoire
const titresfilms = require('./titres_films.json') // appeler le fichier titres_films.json contenant les titres de films qui vont servir au tirage aléatoire de titre de film

Film.getFilm = function(cptFilm, mesfilms, res)
{
  //console.log("compteur : " + cptFilm)
  if(cptFilm == 10)
  {
    //console.log("10 films !")
    //console.log("mesfilms : " + JSON.stringify(mesfilms))
    res.send(mesfilms)
  }
  else
  {
    montitre = ""
    //random set montitre
    i = Math.floor((Math.random() * titresfilms.titres.length)) // tirage aléatoire d'un titre de film du json 
    montitre = titresfilms.titres[i].titre // extraire le titre du film en question
    url = 'http://www.omdbapi.com/?t='+ montitre +'&apikey=25f31d56' // définir l'url du film d'OMDB 

    request( url, function(error, response, body)
    {
      //console.log("getFilm cptFilm : " + cptFilm)
      //console.log("getFilm mesfilms : " + JSON.stringify(mesfilms))
     // console.log("toutes les infos sur le film sont: " + body)
     // console.log("error : " + error)
      if(!error)
      {
        try{
          jsonomdb = JSON.parse(body)
          if(jsonomdb.Error)
          {
            console.log("omdb error : " + jsonomdb.Error + " on url : " + url)
            Film.getFilm(cptFilm, mesfilms, res)
          }
          else
          {
            monfilm = {}
            actors = jsonomdb.Actors // récupérer la valeur de la clef "Actors" du jsonomdb
           // console.log("url : " + url)
           // console.log("json : " + JSON.stringify(jsonomdb))
           // console.log("actors : " + actors)
            var splt_act = actors.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
            monfilm.acteurp = splt_act[0] // ne récupérer que le premier acteur de la liste
  
            //random set montitre
            i = Math.floor((Math.random() * acteurs.Actors.length) + 1) // tirage aléatoire d'un acteur  du json 
  
            // Définir un 1er acteur fictif
            actors_fictif1 = jsonomdb.Actors
            var splt_act_fictif1 = actors_fictif1.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
            monfilm.acteurfictif1 = splt_act_fictif1[1] // ne récupérer que le premier acteur de la liste
            
            // Définir un 2ème acteur fictif
            actors_fictif2 = jsonomdb.Actors
            var splt_act_fictif2 = actors_fictif2.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
            monfilm.acteurfictif2 = splt_act_fictif2[2] // ne récupérer que le premier acteur de la liste
                
  
            // Définir le titre du film
            monfilm.titre = jsonomdb.Title // récupérer la valeur de la clef "Title" du jsonomdb
            mesfilms[cptFilm] = monfilm
            Film.getFilm(cptFilm + 1, mesfilms, res)
          }
        }
        catch(err)
        {
          console.log("catch error : " + err + " on url : " + url)
          Film.getFilm(cptFilm, mesfilms, res)
        }
      }
      else
      {
        console.log("error : " + error)
        Film.getFilm(cptFilm, mesfilms, res)
      } 
      })
    }
  }


Film.getFilms = function(res)
{ 
  mesfilms = []
  cptFilm = 0
  Film.getFilm(cptFilm , mesfilms, res)
}

module.exports = Film