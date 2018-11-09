### Ouhi Nabil / Novembre 2018 / OpenData

L'interopérabilité
====================

## 1. Qu'est ce que l'interopérabilité
> **Interopérabilité :** *"est la capacité que possède un produit ou un système, dont les interfaces sont intégralement connues, à fonctionner avec d’autres produits ou systèmes existants ou futurs et ce sans restriction d’accès ou de mise en œuvre"*
[définition Wikipedia](https://fr.wikipedia.org/wiki/Interop%C3%A9rabilit%C3%A9)

En parti composé du relatif spatial : **inter** soit ce qui caractérise une relation entre deux ou plusieurs éléments ou phénomènes, et s'oppose à intra. Et composé de l'adjectif **opérable**, autrement dit de ce qui peut être opérer.

La concaténation de ces deux mots nous donne donc: *" la relation et les caractéristiques des relations entre ce qui est opérable "*. Mais dans le cadre d'une approche dite de "Data Science" nous garderons la définition suivante : **L'interopérabilité est la capacité entre plusieurs système à fonctionner et communiquer entre eux**.

Pour qu’un système, logiciel ou une API(*Application Programming Interface*) puisse exploiter des fichiers produits par un autre système, logiciel ou API il doit connaître les caractéristiques du format des fichiers. C'est caractéristiques sont définis soit par un organisme de normalisation, on parle alors de norme soit par un acteur privé on parlera plutôt de standard. Un format est dit ouvert si ses spécifications sont publiées et accessibles de tous. 

Quoi qu'il en soit l'interopérabilité repose sur la présence d’une norme ou d'un standard ouvert.


## 2. Pourquoi le web est un bon exemple ?

Le *World Wide Web*, autrement dit (par simplification) : "le web"  est un bon exemple d'interopérabilité car le web est définit par un réseau internet qui échange (de plus en plus) d'informations entre des clients et et des serveurs à travers le monde, via un protocole de communication (http). L'architecture web a été conçue dès le départ pour s'appuyer sur l'emploi de langages de balisage (HTML) et de métadonnées. Les serveurs web doivent donc être interopérables avec différents logiciels clients. Le Web peut soit renvoyer que des données stockées telles quelles dans des fichiers on parle alors de **Web sémantique**, soit fabriquer / générer à la volée, par un calcul, les fichiers qu'il renvoie, on parle cette fois-ci de **Web dynamique**. 

<p align="center">
<img src="https://media.boingboing.net/wp-content/uploads/2016/12/Mirai-01.jpg" width="300" ) >
</p>
Il est même **nécessaire** d'avoir de l'interopérabilité dans le web car le fait que le web est constitué d'un ensemble de système qui fonctionne différemment des un des autres et qui ont parfois des langages différents et des fonctionnements différents, conditionne le web à être interopérable. Son engouement et son utilisation de plus en plus massive est due en grande partie par son interopérabilité. En gros, plus il y a des ordinateurs ( serveur ou client) qui communique facilement  entre eux (interopérable), plus il y a des personne qui utilise et partage sur ce réseau.

J'aimerai, pour finir sur cette partie, mentioner le W3C :
>*La mission du World Wide Web Consortium (W3C) est de mener le Web à son plein potentiel en créant les normes techniques et >les directives grâce auxquelles le Web reste ouvert, accessible, et **interopérable**, pour chacun, partout.* 

## 3. Qu'est ce qu'apporte l'interopérabilité du web à un DataScientist ?

Aujourd'hui ce qu'on identifie comme un Datascientist est souvent une personne issue d'un parcours informatique et qui possède des compétence de type statistique ou mathématique en plus dans sa trousse à outils. Néanmoins, on peut s'apercevoir que la cas contraire est aussi possible, c'est à dire des statisticiens ou des mathématiciens qui s’enrichissent d'une formation en informatique. 
On s'aperçoit aussi de l'arrivé depuis un moment de formation dédié à la *Data Science* , où on mêle informatique et mathématique et parfois même une expertise métier (géomatique, économétrie, science social, science du langage). Tous ça pour dire que le *DataScientist* peut être vu comme un élément d'interopérabilité à part entier et qui doit jongler entre opération mathématique, opération informatique et différents applications métier. Personnellement je caractérise un DataScientist comme quelqu'un qui à la fois résout des équations et développe des algorithmes. 

Quelques soit sa définition et son parcours,80 % du travail du DataScientist consiste à traiter, manipuler, et échanger des données, ce qui implique souvent récupérer des données et donc de *"requêter"* à l'aide de requêtes http qui communique entre un client et un serveur des données au structure et au format variés. Par la suite, il doit s'adapter ou adapter le format des données reçus pour pouvoir les manipuler, les explorer ou les utiliser à son gré. Du coup il est nécessaire ici d'avoir une "interopérabilité des données" pour réduire et optimisé la charge de travail du Data Scientist. 

En pratique, le DataScientist récupére des données sous forme de json à une réponse d'une requete http, parfois en XML sur un site Web, parfois en CSV dans mail et parfois doit réqueter une base de données en SPAQL ou en SQL. Avec de la chance toutes ces données respecte la même structure et/ou ont les mêmes nom de variables mais parfois pas ! Donc le DataScientist passe une grande partie du temps à structurer et à traiter ces données. Mais heureusement, plus le web devient interopérable et que des standard de format de données s'impose; plus il est facile de manipuler et de croisés les données. 

<p align="right">
<img src="https://www.raconteur.net/wp-content/uploads/2016/10/Unstoppable-march-of-decision-science-1280x720.jpg" width="300")>
</p>
En conclusion de cette partie plus le web est interopérable plus l'échange des données et leur manipulation et donc leur analyse sera facile . Des données qu'on pourra transformer par la suite en informations utiles et donc en connaissances.

## 4. Perspective sur ma carrière . 

Cela va bientôt faire 5 ans que je fais des études pour devenir un "DataScientist", mais ce qui est sûr ! c'est que j'ai une appétence particulière pour le *"Data-journalisme"*, qu'on pourrait définir comme l'exploitations des gros volume de données numérique(*Big Data*) et/ou des données public issues du web (*OpenData*) pour en tirer des informations claires et concises pour le public. Le Data journalisme est un secteur ou l'interopérabilité  est primordiale pour que la coopération des différents acteurs de l'informatique et de l'Internet avec les acteurs de l'information soit fluide. Et l'arrivé du Crowdsourcing en 2006, désignant le recours à un grand nombre de personnes pour externaliser la réalisation de certaines tâches, par la communauté journalistique pousse à l'interopérabilité du web. 

Pour pouvoir manipuler des données et en tirer des données statiques mais aussi pour vulgariser les données à travers de la data visualisation. Il est nécessaire d'avoir de l'interopérabilité rien que pour récupérer des données issue du open data par exemple et ou pour les partager aux publics . 

Manipuler des données dans le but d’en tirer une compréhension sur ce qu’elles mesurent est un exercice délicat et pratiqué depuis longtemps dans certaines communautés scientifiques. Celles-ci ont beaucoup à apprendre au monde du journalisme sur les bonnes pratiques à mettre en œuvre afin d’arriver à une compréhension du monde qui soit basée sur une méthode d’exploration des données valide et scientifiquement rigoureuse.

Interroger les données plutôt que les témoins est un art encore très peu pratiqué par les médias français, parce que cela suppose utiliser des outils informatique et mathématique complexe pour extraire de l’information d’immenses bases de données, par conséquence: l'utilisation de tableur excel et de saisie à la main sont des pratiques toujours d'actualité, parfois il est nécessaire d’utiliser des outils de gestion complexe et du coup passer par des formations pour acceder au données...

Par contre exemple au Royaume-Unis, *Le Guardian* à mis en place des jeux de données centralisé dans une base unique et collaborative permettant plus facilement leur vérification et mise à jour. Une manière de faciliter l’accès aux données et donc d’industrialiser le travail, pour qu’un nombre plus important de journalistes puisse se lancer dans l’aventure.


### Bibliographie

* Cours UM3 : https://github.com/natoine/coursum32018
* Wikipedia : https://fr.wikipedia.org/wiki/Interop%C3%A9rabilit%C3%A9_en_informatique
* Data journalisme : https://data-observer.com/fr/data-journalisme-lintelligence-des-donnees-au-service-de-linformation/
* TEDx DataJournalism is the new Punk : https://www.youtube.com/watch?v=h2zbvmXskSE
* https://www.ekito.fr/people/interoperabilite-dans-tous-ses-etats/
* Le journalisme se saisit du Web, Université de Rennes 1, Olivier Trédan, 2011  :http://florlecam.com/slj/wp-content/uploads/2011/05/Datajournalism-Tr%C3%A9dan.pdf

