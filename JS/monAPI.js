// Get
sendgetfetch = function(theme)
{
  fetch('/score?theme='+theme).then(function(response) {
    if (!response.ok) {
      console.log("Erreur du fetch vers /requestSport")
    }
    else{
      return response.json().then(function(json) {
        console.log(json)
        //dessin histogram
       function initHistogram(svg, w, h, d, a) {
          svgHist = svg;
          wHist = w;
          hHist = h;
          dataHist = d;
          attHist = a;

          //var histogram
          var scaleXHist = d3.scaleLinear();
          var scaleYHist = d3.scaleLinear();

          var xAxisHist = d3.axisBottom(scaleXHist);
          var yAxisHist = d3.axisLeft(scaleYHist);

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

          /*
           * Axe XS
           */
          scaleXHist.domain([d3.min(dataHist, function(d) { return d[attHist]; }),
                     d3.max(dataHist, function(d) { return d[attHist]; })]);
             scaleXHist.range([0, wHist-50]);

             gxAxisHist = svgHist.append("g")
            .call(xAxisHist)
            .attr("transform","translate(25,"+(hHist-25)+")");

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
             scaleYHist.range([hHist-50,0]); //longueur du segment représentant l'axe y

          gyAxisHist = svgHist.append("g")
            .call(yAxisHist)
            .attr("transform","translate(25,25)");

          /*
           * Bars
           */

          bars = svgHist.selectAll(".bars")
            .data(classes)
            .enter().append("rect");

          bars.attr("stroke", "white")
            .attr("stroke-width", 1)
            .attr("fill", "teal")
            .attr("x", function(d) { return 25+d.minX; })
            .attr("y", function(d) { return 25+scaleYHist(d.density); })
            .attr("width", function(d) { return d.maxX-d.minX; })
            .attr("height", function(d) { return hHist-50-scaleYHist(d.density); });
         }

        }
    //document.getElementById("Reponse").innerHTML="test";
    initHistogram(d3.select("#Reponse"), 350, 230, json, "score");

  }
)}
)}

// Post
sendpostfetch = function(nickname,theme,score,age,sexe){
  console.log("Dans sendpostfetch()");
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
	},
  console.log("dans fetch"));
}
