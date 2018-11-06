getSport = function(){
  request('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France' , function(error, response, body){
  console.log(body)
  jsonListeSport = JSON.parse(body)
  //str = jsonListeSport.Actors
  //var splt = str.split(",")
  //console.log(splt[0])
  console.log(jsonListeSport)
  })
}
