const request = require('request')
//const cheerio = require('cheerio')
//const fs = require('fs')
//const Json2csvparser = require('json2csv').Parser

// application/routes.js
module.exports = function(app, express) {

    // get an instance of the router for main routes
    const mainRoutes = express.Router()
    mainRoutes.get('/', function(req, res) {
    	request("https://query.wikidata.org/sparql?query=SELECT%20%3Fgame%20%3FgameLabel%20%3Flogo%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%22.%20%7D%0A%20%20%3Fgame%20wdt%3AP31%20wd%3AQ7889.%0A%20%20%3Fgame%20wdt%3AP154%20%3Flogo.%0A%7D%0AORDER%20BY%20RAND()%0ALIMIT%205&format=json" , function(error, response, body){
			console.log(body)
		})
    })


	// apply the routes to our application
    app.use('/', mainRoutes)

}
