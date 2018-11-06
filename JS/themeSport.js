getSport = function(){
  request('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France' , function(error, response, body){
  var jsonListeSport = JSON.parse(body)
  console.log(jsonListeSport)
  return jsonListeSport
  })
}
