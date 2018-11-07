const request = require('request')
const fs = require('fs')

module.exports = function(app, express) {
    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    // Index.html
    mainRoutes.get('/', function(req, res) {
			res.render('index')
		})
	mainRoutes.get('/thememusic.js', function(req, res) {
        fs.readFile("JS/thememusic.js", function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.write(data)
            res.end()
        })
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
    mainRoutes.get('/requestSport' , function(req, res) {
      request('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France' ,
        function(error, response, body){
            var json = JSON.parse(body)
            res.send(json)
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



	/////////////// apply the routes to our application
    app.use('/', mainRoutes)

}
