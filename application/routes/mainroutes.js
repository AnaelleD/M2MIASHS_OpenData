const request = require('request')
const fs = require('fs')
const film = require('../../JS/themefilm.js') // appeler le fichier themefilm.js

const mongo = require('mongodb')
//load up the scores model
const Score = require('../models/score')

module.exports = function(app, express) {
    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    // Index.html
    mainRoutes.get('/', function(req, res) {
			res.render('index')
		})

    ////////// Liste des requetes
    // Theme Sport
    mainRoutes.get('/requestSport' , function(req, res) {
      request('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France' ,
        function(error, response, body){
            var json = JSON.parse(body)
            res.send(json)
            })
    })

    // Theme Music
    mainRoutes.get('/requestMusic' , function(req, res) {
      request('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France' ,
        function(error, response, body){
            var json = JSON.parse(body)
            res.send(json)
            })
    })

    // Theme Cinema
    mainRoutes.get('/requestCinema' , function(req, res) {
      film.getFilms(res) // appliquer la fonction getFilm du fichier themeFilm.js
    })

    // Theme Flag
    mainRoutes.get('/requestFlag' , function(req, res) {
      request('https://restcountries.eu/rest/v2/region/europe' ,
        function(error, response, body){
            var json = JSON.parse(body)
            res.send(json)
            })
    })

    // Theme Games
    mainRoutes.get('/requestGames' , function(req, res) {
      request('https://query.wikidata.org/sparql?query=SELECT%20%3Fgame%20%3FgameLabel%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%22.%20%7D%0A%20%20%3Fgame%20wdt%3AP31%20wd%3AQ7889.%0A%7DLIMIT%20100&format=json' ,
        function(error, response, body){
            var json = JSON.parse(body)
            res.send(json)
            })
    })

    /////////////// Notre API
    // API Get
    mainRoutes.get('/stats', function(req, res) {
      Score.find({"theme" : "Flag"},{"nickname": true,
        "theme": true,
        "score": true,
        "age": true,
        "sexe": true},function(err, scores){
        console.log(scores);
        if (err){
            res.send(err);
        }
        if (res){
          res.json(scores);
          console.log(scores);
        }
      });
    })

    // API Post
    mainRoutes.post(function(req,res){
    // Nous utilisons le schéma Score
      var score = new Score();
    // Nous récupérons les données reçues pour les ajouter à l'objet Score
      score.nickname = req.body.nickname;
      score.theme = req.body.theme;
      score.score = req.body.score;
      score.age = req.body.age;
      score.sexe = req.body.sexe;
    //Nous stockons l'objet en base
      score.save(function(err){
        if(err){
          res.send(err);
        }
        res.send({message : 'Score enregistré'});
      })
    })


    /////////////// livre un fichier js client
    // Global, Animation, Modif DOM
    mainRoutes.get('/fetch', function(req, res) {
      fs.readFile("JS/fetch.js", function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/plain'})
       res.write(data)
       res.end()
    })
  })

    // Theme Sport
    mainRoutes.get('/fetchSport', function(req, res) {
      fs.readFile("JS/fetchSport.js", function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/plain'})
       res.write(data)
       res.end()
    })
  })

    // Theme Music
    mainRoutes.get('/fetchMusic', function(req, res) {
      fs.readFile("JS/fetchMusic.js", function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/plain'})
       res.write(data)
       res.end()
    })
  })

  // Theme Cinema
  mainRoutes.get('/fetchCinema', function(req, res) {
    fs.readFile("JS/fetchCinema.js", function(err, data) {
     res.writeHead(200, {'Content-Type': 'text/plain'})
     res.write(data)
     res.end()
  })
  })

  // Theme Flag
  mainRoutes.get('/fetchFlag', function(req, res) {
    fs.readFile("JS/fetchFlag.js", function(err, data) {
     res.writeHead(200, {'Content-Type': 'text/plain'})
     res.write(data)
     res.end()
  })
  })

  // Theme Games
  mainRoutes.get('/fetchGames', function(req, res) {
    fs.readFile("JS/fetchGames.js", function(err, data) {
     res.writeHead(200, {'Content-Type': 'text/plain'})
     res.write(data)
     res.end()
  })
  })

	/////////////// apply the routes to our application
    app.use('/', mainRoutes)
}
