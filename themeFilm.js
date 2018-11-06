const request = require('request')

const Film = {}

Film.getFilm = function(res, titre){
  request('http://www.omdbapi.com/?t='+ titre +'&apikey=25f31d56' , function(error, response, body){
    console.log(body)
    jsonomdb = JSON.parse(body)
    str = jsonomdb.Actors
    var splt = str.split(",")

    console.log(splt[0])

    res.send(splt[0])
  })
}  

module.exports = Film