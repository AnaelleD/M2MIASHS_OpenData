const port      = process.env.PORT || 8080
const express   = require('express')
const app       = express()
const morgan    = require('morgan')

app.use(morgan('dev')) // log every request to the console

app.set('views', './view')
app.set('view engine', 'ejs') // set up ejs for templating

// routes ======================================================================
require('./application/routes/mainroutes_Rym.js')(app, express) //récupérer le fichier qui contient la route (get + url de l'API)

// launch ======================================================================
app.listen(port)
console.log('And the magic happens on port ' + port)
