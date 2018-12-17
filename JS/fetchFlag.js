fetchFlag = function(){
    fetch('/requestFlag').then(function(response) {
      // FAIRE ICI TRAITEMENT SUR REPONSE
      response.json().then(function(jsonFlag){
        //définir des array pour récupérer les noms et les drapeaux
        var flag = [];
        var name = [];
        //définir la variable contenant le JSON récupéré par la requête
        //jsonFlag = JSON.parse(body);
        //parcourir chaque élément du JSON et extraire le nom et le drapeau du pays
        for (i in jsonFlag) {
          name.push(jsonFlag[i].name); //liste contenant les noms des pays
          flag.push({ question: jsonFlag[i].flag , reponse: jsonFlag[i].name}); //dictionnaire contenant les noms et drapeaux des pays
        };

        //définition variables pour le tirage au sort sans remise du noms des pays pour une session de quizz avec 10 questions
        var nameQuestion = [];
        //tirage au sort sans remise des pays pour une session de quizz avec 10 questions
        for (var i = 0; i<10; i++){
          var longueur = flag.length;
        	tirage = Math.floor(Math.random() * longueur);
        	nameQuestion[i] = flag[tirage];
          flag.splice(tirage,1);
        };
        //console.log(name);
        //console.log(nameQuestion);

        //définition jeu données sans les 10 réponses justes
        for (i in nameQuestion){
            name.splice(name.indexOf(nameQuestion[i].reponse),1);
        }
        //ajout d'une colonne faux1 de réponses fausses avec tirage sans remise
        var nameFaux1 = [];
        for (var i = 0; i<10; i++){
          var longueurFaux1 = name.length;
          tirageFaux1 = Math.floor(Math.random() * longueurFaux1);
        	nameFaux1[i] = name[tirageFaux1];
          name.splice(tirageFaux1,1);
          nameQuestion[i].faux1 = nameFaux1[i];
        };
      //  console.log(nameFaux1);

        //définition jeu données sans les 10 réponses justes et les 10 fausses précédentes
        for (i in nameQuestion){
            name.splice(name.indexOf(nameQuestion[i].faux1),1);
        }
        //console.log(nameQuestion);
        //console.log(name);
        //ajout d'une colonne faux1 de réponses fausses avec tirage sans remise
        var nameFaux2 = [];
        for (var i = 0; i<10; i++){
          var longueurFaux2 = name.length;
          tirageFaux2 = Math.floor(Math.random() * longueurFaux2);
          nameFaux2[i] = name[tirageFaux2];
          name.splice(tirageFaux2,1);
          nameQuestion[i].faux2 = nameFaux2[i];
        };
     // console.log(nameQuestion)
      fetchSuivant(nameQuestion,"Flag");
      })

    }
)}
