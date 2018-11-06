const film = require('../../themefilm.js') // appeler le fichier themefil.js
const titresfilms = require('../../titres_films.json') // appeler le fichier titres_films.json contenant les titres de films qui vont servir au tirage aléatoire de titre de film

// application/routes.js
module.exports = function(app, express) {

    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    mainRoutes.get('/', function(req, res) {
        montitre = ""

        //random set montitre
        i = Math.floor((Math.random() * titresfilms.titres.length) + 1) // tirage aléatoire d'un titre de film du json 
        montitre = titresfilms.titres[i].titre // extraire le titre du film en question

        film.getFilm(res, montitre) // applquer la fonction getFilm du fichier themeFilm.js 
		})

	// apply the routes to our application
    app.use('/', mainRoutes)

}
