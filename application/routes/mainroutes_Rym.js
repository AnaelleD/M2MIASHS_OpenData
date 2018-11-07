const film = require('../../themefilm.js') // appeler le fichier themefil.js

// application/routes.js
module.exports = function(app, express) {

    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    mainRoutes.get('/', function(req, res) {
        

        film.getFilms(res) // applquer la fonction getFilm du fichier themeFilm.js 
		})

	// apply the routes to our application
    app.use('/', mainRoutes)

}
