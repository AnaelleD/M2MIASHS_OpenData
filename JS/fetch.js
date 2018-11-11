var SCORE=0;

fetchSuivant = function (DATA){
	var CHOIX = '';
	var QUEST= '';
	
	for (j=0;j<10;j++) {
	Question = DATA[j].question
	REPA= DATA[j].reponse
	REPB= DATA[j].faux1
	REPC= DATA[j].faux2
	REP=[REPA,REPB,REPC];
	TREP=[1,0,0];
	 CHOIX += '<div id="SHOW'+j+'" class="custom-radios" style="visibility: hidden;">'+
  		'<div><input type="radio" id="A" name="color" value="A" onclick=Suivant('+j+','+TREP[0]+')><label for="A">'+
     ' <span>'+REP[0]+'</span></label>'+
     '</div>'+  
     '<div>'+
   		 '<input type="radio" id="B" name="color" value="B" onclick=Suivant('+j+','+TREP[1]+')><label for="B">'+
     ' <span>'+REP[1]+'</span></label>'+
     '</div>'+
     '<div>'+
   		 '<input type="radio" id="C" name="color" value="C" onclick=Suivant('+j+','+TREP[2]+')><label for="C">'+
     ' <span>'+REP[2]+'</span></label>'+
     '</div>'+
     '</div>';
     
    QUEST+='<div id="SHOW'+10+j+'" style="visibility: hidden";>'+
    "<h1> #"+(j+1)+"</h1>"+
	'<img src="'+Question+'" height=70px;></img>'+
	'</div>';	
	};
	QUEST+='<div id="SHOW1010" style="visibility: hidden";><h1>Terminé !!!</h1></div>';
	 CHOIX += '<div id="SHOW10" style="visibility: hidden";><h1>Terminé !!!</h1></div>';
	 
	document.getElementById("Question").innerHTML=QUEST;
	document.getElementById("Reponse").innerHTML=CHOIX;
	document.getElementById("SHOW0").style.visibility="visible";
	document.getElementById("SHOW100").style.visibility="visible";

}



function Suivant (j,REP) {
	document.getElementById("A").disabled = true;
	document.getElementById("B").disabled = true;
	document.getElementById("C").disabled = true;
	
	setTimeout(function() {
	document.getElementById("SHOW"+j).innerHTML="";
	document.getElementById("SHOW10"+j).innerHTML="";
	j=j+1;
	document.getElementById("SHOW"+j).style.visibility="visible";
	document.getElementById("SHOW10"+j).style.visibility="visible";
	document.getElementsByClassName('well-lg')[0].style["background-color"]='';
	document.getElementById("A").disabled = false;
	document.getElementById("B").disabled = false;
	document.getElementById("C").disabled = false;
	},300);
	if (j==0) {SCORE=0}else {}
	if (REP==1){
		document.getElementsByClassName('well-lg')[0].style["background-color"]='lightgreen';
		SCORE+=1;
		document.getElementById("SCORE").innerHTML=SCORE;
		}
	else {document.getElementsByClassName('well-lg')[0].style["background-color"]='red'}
	
}


function fetchBoutton(theme){
		var i=0;

	if (theme == "Sport"){
 	fetchSport()
  }
  else if (theme == "Music"){
    fetchMusic()
  }
  else if (theme == "Cinema"){
   fetchCinema()
  }
  else if (theme == "Flag"){
    fetchFlag()
	  }
  else if (theme == "Games"){
    fetchGames()
  }else{
    console.log("erreur")
  };
  
}

