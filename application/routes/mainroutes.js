const request = require('request')
//const cheerio = require('cheerio')
//const fs = require('fs')
//const Json2csvparser = require('json2csv').Parser

// application/routes.js
module.exports = function(app, express) {

    // get an instance of the router for main routes
    const mainRoutes = express.Router()
    mainRoutes.get('/', function(req, res) {
	var req = require('request');
	req("https://query.wikidata.org/sparql?query=SELECT%20%3Fgame%20%3FreleaseDate%20%3Flogo%20%0AWHERE%20%7B%0A%20%20%3Fgame%20wdt%3AP154%20%3Flogo.%0A%20%20%3Fgame%20wdt%3AP577%20%3FreleaseDate.%0A%7D&format=json", function(error, response, body){
	 // console.log(body);
	  jsonList = JSON.parse(body);
	  console.log(jsonList.results.bindings[42].logo.value);
	  console.log(jsonList.results.bindings[42].releaseDate.value);
		})
    })
	// apply the routes to our application
    app.use('/', mainRoutes)
}