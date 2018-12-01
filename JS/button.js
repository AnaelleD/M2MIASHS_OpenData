// Fonction appelée lors click boutton choix des thèmes
function fetchBoutton(theme){
		var i=0;
	if (theme == "Sport"){
 	fetchSport()
  }
  else if (theme == "Monument"){
    fetchMonument()
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

// Appelée dans fetch${theme}. Initialisation question / reponses
fetchSuivant = function (DATA,theme){
  var form='<div id="SHOW1010" style="visibility: hidden";><h2 class="text-center">Bravo ! </br> Remplissez le formulaire pour visualiser vos stats.</h2>'+
      '<div class="form-group"><label class="control-label col-sm-2" for="email">Nickname</label>'+
  		'<div class="col-sm-4"><input type="text" class="form-control" id="name" name="name"></div></div>'+
      '<div class="form-group"><label class="control-label col-sm-2" for="email">Age</label>'+
  		'<div class="col-sm-3"><input type="number" class="form-control" id="age" name="age" value=25></div></div>'+
      '<div class="form-group"><div class="col-sm-1"></div>'+
      	'<div class="radio col-sm-2"><label><input type="radio" name="optradio" value="M" checked="checked">Homme</label></div>'+
      	'<div class="radio col-sm-2"><label><input type="radio" name="optradio" value="F">Femme</label></div></div>'+
      '<div class="form-group text-center"> ' +
          '<button  class="btn btn-default" onclick=statsPost("'+theme+'");><span class="glyphicon glyphicon-stats"></span></button>'+
  		'</div></div> ';

	document.getElementById("doublon").style.visibility="visible";
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
	QUEST+=form;
	 CHOIX += '<div id="SHOW10" style="visibility: hidden";><br><h2>Votre score : <span id="SCORE2" class="label label-warning" >0</span></h2></div>';

	document.getElementById("Question").innerHTML=QUEST;
	document.getElementById("Reponse").innerHTML=CHOIX;
	document.getElementById("SHOW0").style.visibility="visible";
	document.getElementById("SHOW100").style.visibility="visible";

}


// Appelé par click boutton suivant
var SCORE=0;
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
	if (j==0) {SCORE=0}
	if (REP==1){
		document.getElementsByClassName('well-lg')[0].style["background-color"]='lightgreen';
		SCORE+=1;
		document.getElementById("SCORE").innerHTML=SCORE;
		document.getElementById("SCORE2").innerHTML=SCORE;
		}
	else {document.getElementsByClassName('well-lg')[0].style["background-color"]='red'};

	if (j==9) {document.getElementById("doublon").style.visibility="hidden";}
}
