const request = require('request')
const fs = require('fs')

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
    mainRoutes.get('/requestSport' , function(req, res) {
      request('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France' ,
        function(error, response, body){
            var json = JSON.parse(body)
            res.send(json)
            })
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
      request('https://query.wikidata.org/sparql?query=SELECT%20%3Flogo%20%3FpublisherLabel%0AWHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%22.%20%7D%0A%20%20%3Fgame%20wdt%3AP31%20wd%3AQ7889.%0A%20%20%3Fgame%20wdt%3AP154%20%3Flogo.%0A%20%20%3Fgame%20wdt%3AP123%20%3Fpublisher.%0A%20%20BIND(STR(%3FpublisherLabel)%20AS%20%3Fstring).%0A%7D&format=json' ,
        function(error, response, body){
           var json = JSON.parse(body)
			res.send(json)
			})
		})
	
	//Theme Games 2 le retour
    mainRoutes.get('/requestGames2' , function(req, res) {
		for (i in urlList)
		  request(urlList[i],
			function(error, response, body){
			   var json = JSON.parse(body)
				res.send(json)
				})
			})
			
	/*	request('https://www.wikidata.org/entity/Q193559' ,
		function(error, response, body){
            var json = JSON.parse(body)
			console.log(json)
            //res.send(json)
            })*/

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