fetchSport = function(){
    fetch('/requestSport').then(function(response) {
      // FAIRE ICI TRAITEMENT SUR REPONSE
      console.log(response.json())
    }
)}
