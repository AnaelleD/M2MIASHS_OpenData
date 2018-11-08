fetchGames = function(){
    fetch('/requestGames').then(function(response) {
      if (!response.ok) {
        console.log("Erreur du fetch vers /requestGames")
		}
      else{
        return response.json().then(function(json) {
			var publisher = [];
			var logo= [];
		
			for (i in json.results.bindings) {
			  publisher.push(json.results.bindings[i].label.value);
			  logo.push({ question: json.results.bindings[i].logo.value, reponse: json.results.bindings[i].label.value});
			};
			
		var game = []
		var listLogo = [...Array(logo.length).keys()];
		var listId = getRandomArbitrary(listLogo,10); 
		var false1 = [];
		var false2 = [];
		
		
		//console.log(logo);
        console.log(listLogo);
		console.log(listId);

	})
}})}