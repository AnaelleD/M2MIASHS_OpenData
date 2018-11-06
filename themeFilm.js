var Film

getFilm = function(){
  request('http://www.omdbapi.com/?t=Film&apikey=25f31d56' , function(error, response, body){
    console.log(body)
    jsonomdb = JSON.parse(body)
    str = jsonomdb.Actors
    var splt = str.split(",")
    console.log(splt[0])
  })
}  