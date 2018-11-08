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
          publisher.push(json.results.bindings[i].publisherLabel.value);
          logo.push({ question: json.results.bindings[i].logo.value, reponse: json.results.bindings[i].publisherLabel.value});
        };
		
		//console.log(publisher)
		//console.log(logo)

		fetch('/requestGames2').then(function(response) {
			if (!response.ok){
				console.log("Erreur du fetch vers /requestGames2")
			}
			else{
				return response.json().then(function(json){
					var urlList = [];
					const url = "https://www.wikidata.org/entity/"
					for(i in publisher){
						urlList.push(url+publisher[i])
					}
		})
	  }
	})
}