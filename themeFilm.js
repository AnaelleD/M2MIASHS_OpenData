var Film

getFilm = function(){
  var url = 'http://www.omdbapi.com/?t=Film'

  fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      
      console.log(json);
    }
  )
}