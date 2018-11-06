const request = require('request')
//const cheerio = require('cheerio')
//const fs = require('fs')
//const Json2csvparser = require('json2csv').Parser

// application/routes.js
module.exports = function(app, express) {

    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    mainRoutes.get('/', function(req, res) {
    	request('http://www.omdbapi.com/?t=titanic&apikey=25f31d56' , function(error, response, body){
			console.log(body)
			jsonomdb = JSON.parse(body)
			str = jsonomdb.Actors
			var splt = str.split(",")
			console.log(splt[0])
		})
    })

   
	// apply the routes to our application
    app.use('/', mainRoutes)

}
