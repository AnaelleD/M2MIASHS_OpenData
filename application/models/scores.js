/ app/models/scores.js
// load the things we need
const mongoose = require('mongoose')
const bcrypt   = require('bcrypt-nodejs')

// define the schema for our scores model
const scoresSchema = mongoose.Schema({
        nickname     : String,
        score        : Number,
        age     : Number,
    })

// create the model for users and expose it to our app
const configDB = require('../../config/database.js')
const db = mongoose.createConnection(configDB.url)
//module.exports = mongoose.model('User', userSchema)
module.exports = db.model('Scores', scoresSchema)
