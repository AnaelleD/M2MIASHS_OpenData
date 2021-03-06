////////// Get
sendgetfetch = function(theme)
{
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  var myInit = { method: 'GET',
              headers: myHeaders,
              cache: 'default' };
  fetch('/score?theme='+theme,myInit).then(function(response) {
    if (!response.ok) {
      console.log("Erreur du get vers /score")
    }
    else{
      return response.json().then(function(json) {
        //console.log(json)

        //////// Afficher le classement des 10 meilleurs pour ce score :
        function top10(data) {
        	document.getElementById("Question").innerHTML="";
        	data2 = sortJSON(data,'score');
        	var TOP='<table class="table table-striped"><thead><tr><th>#</th><th>Nickname</th><th>Score</th></tr></thead><tbody>';
        	for (var i=0;i<10;i++) {
        		 TOP+="<tr><td>"+(i+1)+"</td><td>"+data2[i].nickname+"</td><td>"+data2[i].score+"</td></tr>";
        	}
        	TOP+="</tbody></table>";
        	document.getElementById("Question").innerHTML=TOP;
        }
        function sortJSON(data, key) {
        	return data.sort(function(a, b) {
        		var x = a[key]; var y = b[key];
        		 return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
        }

		top10(json);


        //////// Afficher l'histogramme pour ce score :
       function initHistogram(w, h, d, a) {
       	document.getElementById("Reponse").innerHTML="";
         var svgHist = d3.select("#Reponse").append("svg");
          wHist = w;
          hHist = h;
          dataHist = d;
          attHist = a;

          //var histogram
          var scaleXHist = d3.scaleLinear();
          var scaleYHist = d3.scaleLinear();

          var xAxisHist = d3.axisBottom(scaleXHist).tickValues([1,2,3,4,5,6,7,8,9,10]);
          var yAxisHist = d3.axisLeft(scaleYHist).ticks(2);

          var gxAxisHist;
          var gyAxisHist;

          var classes;
          var nbClasses = 10;

          var bars;

          /*
        	 * SVG
        	 */
        	svgHist.attr("width", wHist)
        			.attr("height", hHist);

          // title
     		  svgHist.append("text")
     					.attr("transform",
     		            "translate(" +(wHist-150)+","+(hHist-210)+")")
     		      .style("text-anchor", "middle")
     		      .text(theme);

          /*
           * Axe XS
           */
          scaleXHist.domain([1,10]);
             scaleXHist.range([0, wHist-120]);

             gxAxisHist = svgHist.append("g")
            .call(xAxisHist)
            .attr("transform","translate(70,"+(hHist-52)+")");

          // text label for the x axis
  			  svgHist.append("text")
  						.attr("transform",
  			            "translate(" +(wHist-140)+","+(hHist-20)+")")
  			      .style("text-anchor", "middle")
  			      .text("Score");

          /*
           * Création d'un tableau "classes" contenant des objets décrivant chaque classe
           * Chaque classe est décrite par :
           * 		- un identifiant ("id")
           * 		- la position en pixel de la valeur minimale ("minX")
           * 		- la position en pixel de la valeur maximale ("maxX")
           *		- l'effectif ("absfrequency")
           * 		- la densité ("density")
           */

         //définition des classes
          classes = [];
          for(i=0 ; i<nbClasses ; i++){
            var minX = i*((wHist-50)/nbClasses);
            var maxX = (i+1)*((wHist-50)/nbClasses);
            classes[i] = {"id":i, "minX":minX, "maxX":maxX, "absfrequency":0, "density":0};
          }

         // boucle pour le calcul des densités
          var maxdensity = 0;
          for(i=0 ; i<nbClasses ; i++){
            classes[i].absfrequency = 0;
            var minV = scaleXHist.invert(classes[i].minX);
            var maxV = scaleXHist.invert(classes[i].maxX);
            for(j=0 ; j<dataHist.length ; j++){
              if(parseFloat(dataHist[j][attHist])>=minV && parseFloat(dataHist[j][attHist])<=maxV){
                classes[i].absfrequency +=1;
              }
            }
            classes[i].density = classes[i].absfrequency/(maxV-minV);
            if(classes[i].density>maxdensity) maxdensity = classes[i].density;
          }

          /*
           * Axe Y
           */

          scaleYHist.domain([0, maxdensity]); //borne min et max des données de densité
             scaleYHist.range([hHist-100,0]); //longueur du segment représentant l'axe y

          gyAxisHist = svgHist.append("g")
            .call(yAxisHist)
            .attr("transform","translate(50,50)");

          // text label for the y axis
    		  svgHist.append("text")
    		      .attr("transform", "rotate(-90)")
    		      .attr("y", -0)
    		      .attr("x", -125)
    		      .attr("dy", "1em")
    		      .style("text-anchor", "middle")
    		      .text("Nombre de joueurs");

          /*
           * Bars
           */

          bars = svgHist.selectAll(".bars")
            .data(classes)
            .enter().append("rect");

          bars.attr("stroke", "white")
            .attr("stroke-width", 1)
            .attr("fill", "teal")
            .attr("x", function(d) { return 60+d.minX; })
            .attr("y", function(d) { return 50+scaleYHist(d.density); })
            .attr("width", function(d) { return d.maxX-d.minX; })
            .attr("height", function(d) { return hHist-100-scaleYHist(d.density); })
         }

         initHistogram(500, 230, json, "score");

       })
     }
   }
)}




// download file to json and xml
downloadFiles = function(theme)
{
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  var myInit = { method: 'GET',
              headers: myHeaders,
              cache: 'default' };
  fetch('/score?theme='+theme,myInit).then(function(response) {
    if (!response.ok) {
      console.log("Erreur du get vers /score")
    }
    else{
      return response.json().then(function(json) {
        //console.log(json)

        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));

        var a = document.createElement('a');
        a.href = 'data:' + data;
        a.download = 'scores.json';
        a.innerHTML = '<div>Télécharger en Json</div>';

        var container = document.getElementById('Reponse');
        container.appendChild(a);
       })
     }
   })

   var myHeaders = new Headers();
   myHeaders.append("Accept", "text/xml")
   var myInit = { method: 'GET',
               headers: myHeaders,
               cache: 'default' };
  fetch('/score?theme='+theme,myInit).then(function(response) {
    if (!response.ok) {
      console.log("Erreur du get vers /score XML")
    }
    else{
      return response.text().then(function(xml) {
        //console.log(xml)

        var data = "text/xml;charset=utf-8," + encodeURIComponent(xml);
        var a = document.createElement('a');
        a.href = 'data:' + data;
        a.download = 'scores.XML';
        a.innerHTML = '<div>Télécharger en XML</div>';

        var container = document.getElementById('Reponse');
        container.appendChild(a);

       })
     }
   }
)}




////////// Post
sendpostfetch = function(nickname,theme,score,age,sexe){
	fetch('/score', {
  		method: 'POST',
  		body: JSON.stringify({
				nickname: nickname,
				theme: theme,
        score:score,
        age:age,
        sexe:sexe
			}),
		headers: {
      		'Content-Type': 'application/json'
    	}
	})
}
