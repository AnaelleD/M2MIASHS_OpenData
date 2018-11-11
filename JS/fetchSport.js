// Fonction qui permet de retourner un vecteur de times indexes dans liste
function getRandomArbitrary(liste,times) {
  var listeRandom = [];
  for (i = 0; i < times; i++) {
    var longueur = liste.length;
    tirage = Math.floor(Math.random() * longueur)
    listeRandom.push(liste[tirage])
    liste.splice(tirage, 1);
  }
  return listeRandom;
}

// Fetch vers requeteSport
fetchSport = function(){
    fetch('/requestSport').then(function(response) {
      if (!response.ok) {
        console.log("Erreur du fetch vers /requestSport")
      }
      else{
        return response.json().then(function(json) {

          // Récuperation liste des teams + blasons :
          var jsonListe = json.teams
          var teamListe = []
          var blasonListe = []
          for(team in jsonListe){
            if(jsonListe[team].strTeamBanner !== null){ // Pour ceux qui ont un blason non null
              if(jsonListe[team].strTeamBanner.length > 0){ // Pour ceux qui ont un blason avec un chemin renseigné
                teamListe.push(jsonListe[team].strTeam)
                blasonListe.push(jsonListe[team].strTeamBanner)
              }
            }
          }

          // Creation des listes
          var listeTeamTot = [...Array(teamListe.length).keys()]; // Liste de tous les indexes
          var listeId = getRandomArbitrary(listeTeamTot,10); // Generation 10 entiers aleatoires pour les questions / reponses
          var listeFaux1 = [] // liste de faux 1
          var listeFaux2 = []  // liste de faux 2

          // Remplissage listeFaux1, listeFaux2
          for(var i = 0; i<listeId.length; i++) {
            var teamListeSubId =  [...Array(teamListe.length).keys()];
            teamListeSubId.splice(listeId[i], 1); // On enleve la bonne reponse
            var lesFaux = getRandomArbitrary(teamListeSubId,2) // Selection de 2 faux
            listeFaux1.push(teamListeSubId[lesFaux[0]])
            listeFaux2.push(teamListeSubId[lesFaux[1]])
          }

          // Mise en place du JsonArray
          var jsonArray = []
          for (i = 0; i < listeId.length; i++) {
            var laQuestion = blasonListe[listeId[i]]
            var laReponse = teamListe[listeId[i]]
            var leFaux1 = teamListe[listeFaux1[i]]
            var leFaux2 = teamListe[listeFaux2[i]]
            jsonArray.push({question:laQuestion,reponse:laReponse,faux1:leFaux1,faux2:leFaux2})
          }
          //return jsonArray;
          fetchSuivant(jsonArray);
          
        })}
    })
  }
  
