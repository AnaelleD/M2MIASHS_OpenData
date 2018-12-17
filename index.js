const port      = process.env.PORT || 8080
const express   = require('express')
const app       = express()
const morgan    = require('morgan')
const mongoose = require('mongoose')
const configDB = require('./config/database.js')
const bodyParser   = require('body-parser')

app.use(bodyParser.json())
app.use(morgan('dev')) // log every request to the console
app.set('views', './view')
app.set('view engine', 'ejs') // set up ejs for templating

// configuration ===============================================================
//const db = mongoose.createConnection(configDB.url)

// routes ======================================================================
require('./application/routes/mainroutes.js')(app, express) //récupérer le fichier qui contient la route (get + url de l'API)

// launch ======================================================================
app.listen(port)
console.log('And the magic happens on port ' + port)
