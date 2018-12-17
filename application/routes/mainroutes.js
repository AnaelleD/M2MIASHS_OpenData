const request = require('request')
const fs = require('fs')
const film = require('../../JS/themefilm.js') // appeler le fichier themefilm.js

const mongo = require('mongodb')
//load up the scores model
const Score = require('../models/score')
const xmlify = require('xmlify')

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

    // Theme Monument
    mainRoutes.get('/requestMonument' , function(req, res) {
	    request('https://query.wikidata.org/sparql?query=SELECT%20%3Fmonument%20%3Fphoto%20%3Flabel%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cfr%22.%20%7D%0A%20%20%3Fmonument%20wdt%3AP31%20wd%3AQ358.%0A%20%20%3Fmonument%20wdt%3AP18%20%3Fphoto.%0A%20%20%3Fmonument%20rdfs%3Alabel%20%3Flabel%20filter%20(lang(%3Flabel)%20%3D%20%22fr%22).%0A%7D&format=json&format=json',
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
		request('https://query.wikidata.org/sparql?query=SELECT%20%3Flogo%20%3Flabel%20WHERE%20%7B%0A%20%20%3Fgame%20wdt%3AP31%20wd%3AQ7889.%0A%20%20%3Fgame%20wdt%3AP154%20%3Flogo.%0A%20%20%3Fgame%20wdt%3AP123%20%3Fpublisher.%0A%20%20%3Fpublisher%20rdfs%3Alabel%20%3Flabel.%0A%20%20FILTER(lang(%3Flabel)%3D%27en%27)%0A%7D&format=json',
		 function(error, response, body){
			   var json = JSON.parse(body)
				res.send(json)
				})
	})



    /////////////// Notre API
    // API Get
    mainRoutes.get('/score',function(req, res) {
      output = req.query.output;
      theme = req.query.theme;
        Score.find({"theme" : theme},{"nickname": true,
          "theme": true,
          "score": true,
          "age": true,
          "sexe": true},function(err, scores){
          if (err){
              res.send(err);
          }
          if (res){
            //if (output == "json"){
            // Negociation de contenu :
            if(req.accepts('application/json')){
              res.header('Content-Type', 'application/json');
              res.json(scores);
            //}else if (output=="xml") {
            }else if (req.accepts('text/xml')) {
              var xml = xmlify(scores,{root:'scores',wrapArrays:false})
              res.header('Content-Type', 'text/xml')
              res.send(xml)
            }
          }});
      })


    // API Post
    mainRoutes.post('/score', function(req,res){
      body = req.body
    // Nous utilisons le schéma Score
      var score = new Score();
    // Nous récupérons les données reçues pour les ajouter à l'objet Score
      score.nickname = body.nickname;
      score.theme = body.theme;
      score.score = body.score;
      score.age = body.age;
      score.sexe = body.sexe;
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
    mainRoutes.get('/button', function(req, res) {
      fs.readFile("JS/button.js", function(err, data) {
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

    // Theme Monument
    mainRoutes.get('/fetchMonument', function(req, res) {
      fs.readFile("JS/fetchMonument.js", function(err, data) {
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

  // Affichage classement et stats
  mainRoutes.get('/stats', function(req, res) {
    fs.readFile("JS/stats.js", function(err, data) {
     res.writeHead(200, {'Content-Type': 'text/plain'})
     res.write(data)
     res.end()
  })
  })

  // monAPI
  mainRoutes.get('/monAPI', function(req, res) {
    fs.readFile("JS/monAPI.js", function(err, data) {
     res.writeHead(200, {'Content-Type': 'text/plain'})
     res.write(data)
     res.end()
  })
  })
  mainRoutes.get('/d3', function(req, res) {
      fs.readFile("JS/d3.js", function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/plain'})
       res.write(data)
       res.end()
    })
  })

	/////////////// apply the routes to our application
    app.use('/', mainRoutes)
}
