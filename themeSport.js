getSport = function(){
  var url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France'

  fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      
      console.log(json);
    }
  )
}
