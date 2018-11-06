const request = require('request')
//const cheerio = require('cheerio')
//const fs = require('fs')
//const Json2csvparser = require('json2csv').Parser

// application/routes.js
module.exports = function(app, express) {

    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    mainRoutes.get('/', function(req, res) {
      request('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France' , function(error, response, body){
      jsonListeSport = JSON.parse(body)
      teams = jsonListeSport.teams
      var listeTeam = []
      for (iteam in teams){
        listeTeam.concat(teams[iteam].strTeam)
      }
      console.log(listeTeam)
      })
    })


	// apply the routes to our application
    app.use('/', mainRoutes)

}
