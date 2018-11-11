## L'importance de l'interopérabilité en science des données

### Introduction

Le développement rapide des réseaux et des capacités de stockage et de récolte des données a positionné le Big Data comme acteur principal dans tous les domaines scientifiques et de l'ingénierie (incluant la physique, la biologie et les sciences biomédicales). Le Big Data est caractérisé par des données volumineuses et hétérogènes provenant de sources multiples et autonomes (Wu *et al.*, 2014). Ces sources sont de nature très variées comme par exemple des expériences scientifiques ou des capteurs en temps réel utilisés par l'Internet Des Objets (Internet Of Things). De la même manière, les données peuvent aussi être de différents types, structuré (e.g. json) ou non structuré (e.g. images). Ces différences de sources et de type de données placent les capacités de communication entre les systèmes au centre de leur conception. En effet, être capable d'échanger des informations entre des applications, des bases de données ou autre type de système est crucial pour l'économie moderne.

L'opérabilité traduit la capacité d'échange entre des systèmes. Il existe plusieurs niveaux d'opérabilité :
- la compatibilité : c'est la possibilité pour deux systèmes de types différents de communiquer.
- le standard de fait : s'observe dans le cas où un acteur obtient un rôle majeur dans un domaine. Tous les autres acteurs font alors en sorte d'être compatible avec lui.
- l'interopérabilité : c'est la possibilité pour différents systèmes de communiquer entre eux sans dépendre d'un autre acteur particulier.

Historiquement, cette notion d'interopérabilité est abordée par une directive européenne en 1991 (directive européenne 91/250/CEE) puis, en France, elle fait son apparition dans la loi pour la confiance dans l'économie numérique en 2004 (article 4 de la loi n° 2004-575). A partir de 2006, la Direction Générale de la Modernisation de l'État (DGME) puis le Secrétariat Général pour la Modernisation de l'Action Publique (SGMAP) a mis en place un Référentiel Général d'Interopérabilité (RGI). Ce RGI décrit un ensemble de normes et bonnes pratiques communes aux administrations publiques françaises dans le domaine informatique. Il est obligatoire pour les administrations et donne le droit à la connaissance de toutes les interfaces d'un produit.

Une définition plus détaillée de l’interopérabilité est la capacité que possède un produit ou un système, dont les interfaces sont intégralement connues, à fonctionner avec d'autres produits ou systèmes existants ou futurs et ce sans restriction d'accès ou de mise en œuvre. Les interfaces sont ici des dispositifs qui permettent des échanges et interactions entre des acteurs. L'interopérabilité repose donc sur l'utilisation de standards ouverts (i.e. avec des spécifications connues et accessibles à tous). Ces formats ouverts permettent de pouvoir facilement passer d'un format ouvert à un autre. L'obligation d'utiliser un format unique (i.e. l'uniformité) permettrait bien sûr à tous les systèmes de pouvoir utiliser tous les documents mais cela figerait aussi l'évolution des systèmes, alors que le fait de garder des formats variables permet un enrichissement des données et une évolution des systèmes. Il est à noter que la notion d'interopérabilité est intrinsèquement liée à celle de la compatibilité. Si un produit est compatible avec une norme, il est interopérable avec les autres produits conformes à cette même norme. En d'autres termes, deux produits, sytèmes ou organisations sont compatibles si ils peuvent fonctionner ensemble et interopérables si chacun peut savoir pourquoi et comment fonctionner avec l'autre.

### Le Web, un bon exemple d'interopérabilité
Pour atteindre l'objectif d'interopérabilité, un système peut soit être en conformité avec les normes d'interfaces publiées, soit avoir recours à un intermédiaire de services qui convertit à la volée l'interface entre les sytèmes ("broker"). Le Web constitue un bon exemple d'interopérabilité atteint grâce à l'utilisation de normes.

Tim Berners-Lee, l'inventeur du World Wide Web, a imaginé le Web comme une plateforme permettant à tout le monde de partager des informations et de collaborer en dépassant les frontières géographiques et culturelles. L'interopérabilité est donc un des fondements primordiaux du Web selon la vision de son concepteur.

> "a single Web of meaning, about everything and for everyone"
> -- <cite>Tim Berners-Lee</cite>

Le premier navigateur Web a été créé au début des années 90, puis suite à l'ouverture du code source du Web au domaine publique, il a été observé une augmentation drastique du nombre de navigateurs Web ("The browser wars"). Dans le but d'être le plus rapidement les plus compétitifs, les navigateurs ont été implémentés avec des propriétés propres à chacun et parfois incompatibles entre navigateurs. Les développeurs Web se retrouvaient alors à coder différentes versions de sites Web pour différents navigateurs, ou choisissaient de rendre le site compatible uniquement avec un seul navigateur. Cette méthode de travail était en totale contradiction avec la vision de Tim Berners-Lee sur l'ouverture du Web. Dans le but de standardiser les protocoles et les technologies utilisés, Tim Berners-Lee a fondé en 1994 le "World Wide Web Consortium" (W3C) au Massachusetts Institute of Technology (MIT), en collaboration avec le CERN, DARPA et la Comission Européenne. Le W3C propose une standardisation à travers la préconisation de recommandations. A l'heure actuelle, tous les sites Web ne sont pas construits en respectant ces standards mais de plus en plus de développeurs sont conscients de l'existence de standards et de leurs intérêts.

Les recommendations du W3C caractérisent un ensemble de normes du Web qui sont des protocoles (HTTP, TCP, FTP ...) et des technologies (HTML, XHTML, CSS, DOM, Javascript). Le respect de ces standards permet une visualisation des sites Web entre navigateurs mais aussi une compatibilité avec différents systèmes d'exploitation (Windows, Linux ...) et différentes machines (PCs, téléphones, tablettes...). Il permet donc l'interopérabilité du Web. Un bon exemple serait le suivant : en faisant des recherches sur le Web, vous trouvez la page d'un séminaire auquel vous décidez de participer. L'interopérabilité permettrait d'ajouter automatiquement ce séminaire à votre agenda, les coordonnées des organisateurs à votre annuaire et pourrait aussi programmer votre GPS pour que vous puissiez vous y rendre (Frauenfelder, 2004).

Trois niveaux d'interopérabilité ont été définis (HIMSS, 2013):
- interopérabilité primaire : elle permet l'échange de données entre les systèmes sans interpréter les données.
- interopérabilité structurelle : l’échange de données d’un système à l’autre peut être interprété par le format standard de la donnée.
- interopérabilité sémantique : c'est le plus haut niveau d'interopérabilité pour lequel des sytèmes peuvent échanger et comprendre des données. Les systèmes utilisent le même vocabulaire et il n'y a pas de divergence.

Les standards du W3C ont permis l'apparition du Web sémantique. Le Web sémantique se base sur l'utilisation du format Resource Description Framework (RDF) qui est un modèle de graphe destiné à décrire de façon formelle les ressources Web et leurs métadonnées (Shadbolt *et al.*, 2006). Ce format très verbeux permet à la machine de comprendre le contenu d'une page Web. Les systèmes peuvent alors se comprendre et échanger des données, et donc être interopérables.

> "I have a dream for the Web [in which computers] become capable of analyzing all the data on the Web [...]. A “Semantic Web”, which should make this possible, has yet to emerge, but when it does, the day-to-day mechanisms of trade, bureaucracy and our daily lives will be handled by machines talking to machines."
> -- <cite>Tim Berners-Lee, 1999</cite>

DBpedia est un exemple de projet utilisant le Web sémantique. Il propose une structuration des données de Wikipédia et leur mise à disposition via HTTP et SPARQL. Le Web sémantique est en évolution constante mais il possède des détracteurs qui lui opposent plusieurs critiques (formats doubles de fichiers, classification subjectives...). Néanmoins l'utilisation du Web sémantique a déjà fait ses preuves dans plusieurs domaines comme la biologie par exemple (Wolstencroft *et al.*, 2005).

Le Web, ses standards et le Web sémantique sont donc de bons exemples d'interopérabilité.

### Qu'apporte l'interopérabilité en science des données ?

Le Data Scientist est un expert de la gestion et de l'analyse des données. Il doit être capable de porter plusieurs casquettes allant de la gestion de bases de données à la communication de résultats en passant par la conception d'algorithmes, tout cela dans un environnement en constante évolution. L'une des compétences principales d'un Data Scientist est sa capacité (et son intérêt) à s'adapter et à apprendre de nouvelles technologies. Il a un profil hybride et se situe à mi-chemin entre l'informaticien et le statisticien, même si en réalité il est souvent spécialiste d'un des deux domaines ayant appris de nouvelles compétences dans l'autre. Le Data Scientist est capable de tirer de la valeur ajoutée à partir de données diverses et complexes mais des connaissances métiers sont pour lui un avantage lui permettant d'avoir un regard critique sur les données. Au final, le terme de Data Scientist regroupe des spécialités très diverses, mais en pratique, beaucoup d'entreprises recrutent des Data Scientists sur un domaine précis, comme le management d'une base de données SQL par exemple.

La donnée est au centre des recherches du Data Scientist et les sources de données utilisées sont souvent complexes et disjointes. Il passe alors beaucoup de temps à comprendre et à rassembler les données. L'interopérabilité trouve ici tout son intérêt. En effet, des bases de données interopérables représentent un gain de temps conséquent lors de la phase de récolte des données (requêtes explicites, jointure des données facile...). Des tâches répétitives exécutées par le Data Scientist sur le Web peuvent même être remplacées par la machine grâce au Web sémantique. Néanmoins, il faut garder en mémoire que ces formats très verbeux induisent des temps de traitement plus longs.

L'interopérabilité joue donc un rôle primordial en science des données. Elle permet :
- d'harmoniser et de simplifier les données,
- d'assurer une pérennité des données car elles seront facilement compréhensibles par d'autres personnes ou machines,
- de simplifier la vie des utilisateurs,
- d'assurer une bonne accessibilité des données.

Cette accessibilité des données est au centre de l'évolution actuelle des domaines scientifiques. En effet, de plus en plus de scientifiques prônent pour une ouverture des données dans un but de transparence et de reproductibilité des expériences scientifiques (Craglia & Nativi, 2018). Mais nous nous trouvons face à un écart de plus en plus important entre l'augmentation rapide du volume et de la diversité des données produites, et la mise en place de l'organisation et du changement des habitudes nécessaires pour assurer l'interopérabilité ("The Big Data Paradox").

### Conclusion

Avec l'avènement du Big Data, la mise en place de systèmes interopérables est primordiale pour assurer un accès ouvert aux données ainsi qu'à leurs métadonnées. L'interopérabilité présente beaucoup d'avantages pour le Data Scientist et facilite sa compréhension des données ainsi que son accès à des sources de données variées. L'interopérabilité sémantique qui est bien représentée par le Web sémantique est un des degrés ultimes de l'interopérabilité car elle utilise un format standard qui rend les données explicites pour les machines. Malgré tous ces avantages, beaucoup de standards sont ignorés par les Data Scientists dans une optique de gain de temps sur le court terme ou encore à cause de méconnaissances sur les formats standards. De plus, comme il n'y a aucune obligation sur l'utilisation des standards, il est difficile de faire évoluer les pratiques des Data Scientists. Néanmoins, il faudrait s'obliger le plus possible à utiliser des formats standards dans un objectif d'interopérabilité. Cela permettrait une exploitation plus simple et plus facile des données pour une Science plus ouverte.

### Bibliographie

Article 4 de la loi n° 2004-575 (2004). Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.

Berners-Lee T., Fischetti M. (1999). Weaving the Web, HarperSanFrancisco.

Craglia M., Nativi S. (2018). Mind the Gap: Big Data vs. Interoperability and Reproducibility of Science. In: Mathieu PP., Aubrecht C. (eds) Earth Observation Open Science and Innovation. ISSI Scientific Report Series, vol 15.

Directive européenne 91/250/CEE (1991). Conseil du 14 mai 1991 concernant la protection juridique des programmes d'ordinateur.
Journal officiel, L 122, 0042-0046.

Frauenfelder M. (2004). Sir Tim Berners-Lee. MIT's Magazine of Innovation, October 2004.

HIMSS. (2013). Definition of interoperability. https://www.himss.org/library/interoperability-standards/what-is-interoperability

Shadbolt N., Berners-Lee T. & Hall W. (2006). The Semantic Web Revisited. IEEE Intelligent Systems, 21 (3), 96-101.

Wolstencroft K., Brass A., Horrocks I., Lord P., Sattler U.,Turi D. & Stevens R. (2005). A Little Semantic Web Goes a Long Way in Biology. In: Gil Y., Motta E., Benjamins V.R. & Musen M.A. (eds) The Semantic Web – ISWC 2005. ISWC 2005. Lecture Notes in Computer Science, vol 3729. Springer, Berlin, Heidelberg.

Wu X., Zhu X., Wu G.Q. & Ding W. (2014). Data mining with big data. IEEE transactions on knowledge and data engineering, 26(1), 97-107.
