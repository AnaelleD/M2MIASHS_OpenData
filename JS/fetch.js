fetchSuivant = function (i,DATA){
	var DATA=DATA;
	var QUEST="<h1> #"+i+"</h1>";
	document.getElementById("Question").innerHTML=QUEST;

	var REP = ''+
	'<div class="custom-radios">'+
  		'<div><input type="radio" id="color-1" name="color" value="color-1" ><label for="color-1">'+
     ' <span>REPONSE A</span></label>'+
     '</div>'+  
     '<div>'+
   		 '<input type="radio" id="color-1" name="color" value="color-1" ><label for="color-1">'+
     ' <span>REPONSE B</span></label>'+
     '</div>'+
     '<div>'+
   		 '<input type="radio" id="color-1" name="color" value="color-1" ><label for="color-1">'+
     ' <span>REPONSE C</span></label>'+
     '</div>'+
     '</div>';

	
	document.getElementById("Reponse").innerHTML=REP;
		i+=1;
	if(i<=10){
		document.getElementById("Suivant").setAttribute( "onClick","fetchSuivant("+i+","+DATA+")");
		console.log(i)
	}
}

function fetchBoutton(theme){
var DATA="";
	if (theme == "Sport"){
 	DATA=fetchSport()
  }
  else if (theme == "Music"){
    fetchMusic()
  }
  else if (theme == "Cinema"){
    fetchCinema()
  }
  else if (theme == "Flag"){
    fetchFlag()
  }else{
    console.log("erreur")
  };
	var i=0;
	fetchSuivant(0,DATA);
}

