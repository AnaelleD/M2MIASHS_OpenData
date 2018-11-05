getGames = function(){
		var req = "https://query.wikidata.org/embed.html#SELECT%20%3Fgame%20%3FgameLabel%20%3FreleaseDate%20%3Flogo%20WHERE%20%7B%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%20%20%3Fgame%20wdt%3AP31%20wd%3AQ7889.%0A%20%20%3Fgame%20wdt%3AP577%20%3FreleaseDate.%0A%20%20%3Fgame%20wdt%3AP154%20%3Flogo.%0A%7D"
  fetch(req).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      console.log(json);
    }
  )
}
