fetchCinema = function(){
    fetch('/requestCinema').then(function(response) {
      if (!response.ok) {
        console.log("Erreur du fetch vers /requestCinema")
      }
      else{
        return response.json().then(function(json) {
          fetchSuivant(json,"Cinema");
        })
      }
    })
}
