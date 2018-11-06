const request = require('request')
//const music = require('../../thememusic.js')
//const cheerio = require('cheerio')
const fs = require('fs')
//const Json2csvparser = require('json2csv').Parser

// application/routes.js
module.exports = function(app, express) {

    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    mainRoutes.get('/', function(req, res) {
			res.render('index')
		})

    mainRoutes.get('/themeSport.js', function(req, res) {
      fs.readFile("JS/themeSport.js", function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/plain'})
       res.write(data)
       res.end()
    })
  })


	// apply the routes to our application
    app.use('/', mainRoutes)

}
