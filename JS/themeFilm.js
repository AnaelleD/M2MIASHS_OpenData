const request = require('request') // appeler le module "request"
const Film = {} 
const titresfilms = require('./titres_films.json') // appeler le fichier titres_films.json contenant les titres de films qui vont servir au tirage aléatoire de titre de film

Film.getFilm = function(cptFilm, mesfilms, res) // créer une fonction qui prend en paramètres: un compteur de films, des films et une réponse
{
  if(cptFilm == 10) // Si le compteur atteint 10 films
  {
    res.send(mesfilms) // alors renvoyer les films
  }
  else // sinon
  {
    // créer un objet  qui contient le titre du film 
    montitre = ""
    i = Math.floor((Math.random() * titresfilms.titres.length)) // tirage aléatoire d'un titre de film du json 
    montitre = titresfilms.titres[i].titre // extraire le titre du film en question

    // aller chercher l'url du film créé plus haut
    url = 'http://www.omdbapi.com/?t='+ montitre +'&apikey=25f31d56' // définir l'url du film d'OMDB 

    // Faire une requête sur l'url 
    request( url, function(error, response, body) // créer une fonction callback qui prend implicitement en attributs les paramètres de la fonction Film.getFilm
    {      
      if(!error)
      {
        try{ // début d'un try-catch pour afficher les erreurs qu'OMDB peut renvoyer et les afficher dans catch 
          jsonomdb = JSON.parse(body) // parser le body contenu dans le html de l'url 
          if(jsonomdb.Error) // si le parse affiche une erreur
          {
            console.log("omdb error : " + jsonomdb.Error + " on url : " + url) // afficher l'erreur 
            Film.getFilm(cptFilm, mesfilms, res) // mais continuer à parser en ignorant l'erreur tout en affichant les résultats relatifs à l'ereur
          }
          else
          {
            // Créer un objet json qui contiendra: le titre, l'acteur principal et 2 acteurs fictifs
            monfilm = {} // initialiser l'objet json

            // Alimenter l'objet 
            
            // Extraire le nom de l'acteur principal du jsonomdb
            actors = jsonomdb.Actors // récupérer la valeur de la clef "Actors" du jsonomdb
            var splt_act = actors.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
            monfilm.reponse = splt_act[0] // ne récupérer que le premier acteur de la liste
            
            // Définir un 1er acteur fictif
            actors_fictif1 = jsonomdb.Actors
            var splt_act_fictif1 = actors_fictif1.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
            monfilm.faux1 = splt_act_fictif1[1] // ne récupérer que le premier acteur de la liste
            monfilm.faux1 = splt_act_fictif1[1] // ne récupérer que le premier acteur de la liste
            
            // Définir un 2ème acteur fictif
            actors_fictif2 = jsonomdb.Actors
            var splt_act_fictif2 = actors_fictif2.split(",") // ne récupérer que le premier nom d'acteur contenu dans actors
            monfilm.faux2 = splt_act_fictif2[2] // ne récupérer que le premier acteur de la liste
                 
            // Extraire l'affiche du film du jsonomdb
            monfilm.question = jsonomdb.Poster // récupérer la valeur de la clef "Poster" du jsonomdb
            
            // Extraire l'affiche du film du jsonomdb
            //monfilm.image = jsonomdb.Poster // récupérer l'image correspondant à la clef "Poster" du jsonomdb
            
            // Alimenter le dictionnaire mesfilms avec la valeur de monfilm
            mesfilms[cptFilm] = monfilm
            
            // incrémenter le compteur de la fonction Film.getFilm 
            Film.getFilm(cptFilm + 1, mesfilms, res)

            //console.log("ma liste de 10 films est :" + JSON.stringify(mesfilms))
          }
            
        }
        catch(err)
        {
          console.log("catch error : " + err + " on url : " + url) // afficher les informations relatives à l'erreur afficher dans le cadre du try
          Film.getFilm(cptFilm, mesfilms, res) // continuer à parser en ignorant l'erreur tout en affichant les résultats relatifs à l'ereur
        }
      }
      else
      {
        console.log("error : " + error) 
        Film.getFilm(cptFilm, mesfilms, res) // continuer à parser en ignorant l'erreur tout en affichant les résultats relatifs à l'ereur
      } 
      })
    }
  }

  

Film.getFilms = function(res)
{ 
  mesfilms = [] // initialiser le dictionnaire
  cptFilm = 0 // initialiser le compteur
  Film.getFilm(cptFilm , mesfilms, res) // appeler la fonction Film.getFilm (fonction récursive)
}

module.exports = Film // permet d'exporter le fichier js et de l'utiliser par un autre fichier js


