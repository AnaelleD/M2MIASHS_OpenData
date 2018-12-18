# Quizz de culture G

Application de culture générale qui propose plusieurs thèmes : 
- Sport : testez vos connaissances des maillots de football
- Cinéma : retrouvez l'acteur principal de films connus
- Monument : identifier des monuments
- Drapeau : identifiez des drapeaux
- Jeux vidéos : retrouvez le concepteur de jeux vidéos

Vous pouvez visualiser des statistiques pour chaque thème : 
- Classement des 10 meilleurs joueurs
- Histogramme des notes des joueurs

L'application est disponible sur :
https://m2miashsopendata.herokuapp.com/

Les données sont collectées de : 
- https://www.thesportsdb.com/
- http://www.omdbapi.com/
- https://query.wikidata.org/
- https://restcountries.eu/

En utilisant la route GET /score?theme=votretheme vous pouvez récupérer les données des scores en JSon ('Accept':'application/json') ou en XML ('Accept':'text/xml'). Choississez "votretheme" parmi : {Sport, Cinema, Monument, Flag, Games}.
