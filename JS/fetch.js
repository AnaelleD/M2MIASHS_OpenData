fetchSuivant = function (i,DATA,SCORE,REP){
	TREP=['ABC'];	
	if (REP==TREP[0]){
		document.getElementsByClassName('well-lg')[0].style["background-color"]='lightgreen'
		}
		else if (REP=='start') {
			document.getElementsByClassName('well-lg')[0].style["background-color"]=''
		}
		else {
			document.getElementsByClassName('well-lg')[0].style["background-color"]='red'
		}
	setTimeout(function() {
	
	if (REP==TREP[0]) {SCORE+=1;document.getElementById("SCORE").innerHTML=SCORE;}
		
	REP=['ABC','BCD','EFG'];
	var QUEST="<h1> #"+i+"</h1>";
	document.getElementById("Question").innerHTML=QUEST;
	i+=1;

	var CHOIX = ''+
	'<div class="custom-radios">'+
  		'<div><input type="radio" id="A" name="color" value="1" onclick=fetchSuivant('+i+','+DATA+','+SCORE+',"'+REP[0]+'")><label for="A">'+
     ' <span>REPONSE A</span></label>'+
     '</div>'+  
     '<div>'+
   		 '<input type="radio" id="2" name="color" value="2" onclick=fetchSuivant('+i+','+DATA+','+SCORE+',"'+REP[1]+'")><label for="2">'+
     ' <span>REPONSE B</span></label>'+
     '</div>'+
     '<div>'+
   		 '<input type="radio" id="3" name="color" value="3" onclick=fetchSuivant('+i+','+DATA+','+SCORE+',"'+REP[2]+'")><label for="3">'+
     ' <span>REPONSE C</span></label>'+
     '</div>'+
     '</div>';
	document.getElementById("Reponse").innerHTML=CHOIX;
	
	
	document.getElementsByClassName('well-lg')[0].style["background-color"]=''
	},800)
	//document.getElementById("Suivant").setAttribute( "onClick","fetchSuivant("+i+","+DATA+","+SCORE+")");
}

function fetchBoutton(theme){
var DATA="";
	if (theme == "Sport"){
 	DATA=fetchSport()
  }
  else if (theme == "Music"){
    DATA=fetchMusic()
  }
  else if (theme == "Cinema"){
   DATA= fetchCinema()
  }
  else if (theme == "Flag"){
    DATA=fetchFlag()
  }else{
    console.log("erreur")
  };
	var i=0;
	fetchSuivant(0,DATA,0,"start");
}

