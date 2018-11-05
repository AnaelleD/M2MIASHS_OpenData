getFlag = function(){
  var url = 'https://restcountries.eu/rest/v2/region/europe'

  fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){

      console.log(json);
    }
  )
}
