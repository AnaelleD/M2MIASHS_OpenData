fetchGames = function(){
    fetch('/requestGames').then(function(response) {
      if (!response.ok) {
        console.log("Erreur du fetch vers /requestGames")
		}
      else{
        return response.json().then(function(json) {
			var publisher = [];
			var logo = [];
		
			for (i in json.results.bindings) {
			  publisher.push(json.results.bindings[i].label.value);
			  logo.push({ question: json.results.bindings[i].logo.value, reponse: json.results.bindings[i].label.value});
			};
			
		var listLogo = [...Array(logo.length).keys()];
		var listId = getRandomArbitrary(listLogo,10);
		var listFalse1 = [];
		var listFalse2 = [];
		var listQuestion = [];
		var listReponse = [];
		
		for(var i=0; i<listId.length; i++){
			 listQuestion.push(json.results.bindings[listId[i]].logo.value);
			 listReponse.push(json.results.bindings[listId[i]].label.value);
		}
		
		for(var i=0; i<listId.length; i++){
            var listSubId =  [...Array(listLogo.length).keys()];
            listSubId.splice(listId[i], 1);
            var lesFaux = getRandomArbitrary(listSubId,2)
            listFalse1.push(json.results.bindings[listSubId[lesFaux[0]]].label.value)
            listFalse2.push(json.results.bindings[listSubId[lesFaux[1]]].label.value)
          }
		  
		var jsonArray = [];
          for (i = 0; i < listId.length; i++) {
            var question = listQuestion[i]
            var reponse = listReponse[i]
            var false1 = listFalse1[i]
            var false2 = listFalse2[i]
            jsonArray.push({question:question, reponse:reponse, faux1:false1, faux2:false2})
          }
		  //console.log(jsonArray);
		  fetchSuivant(jsonArray);
		  
		})
	}
})}