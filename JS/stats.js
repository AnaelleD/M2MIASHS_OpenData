
// Affichage des stats
function stats(theme) {
	document.getElementById("Question").innerHTML="ScoreBOARD";
  sendgetfetch(theme);
}

// Post des données utilisateurs
function statsPost(theme) {
  theme = theme;
  nickname = document.getElementById("name").value;
  score = $("#SCORE2").text();
  age = document.getElementById("age").value;
  var radios = document.getElementsByName('optradio');
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
          var sexe = radios[i].value;
          break;
      }
  }
  sendpostfetch(nickname,theme,score,age,sexe);
  stats(theme);
}
