# TP_JS
TP Semestre 2 :zap:

RAZAFINDRABE Nathanaël   
DE MASSE Gregoire  
AGOSTINI Arthur

# Configuration du projet et lancement

1. Installer [yarn](https://yarnpkg.com/)

2. `$ git clone https://github.com/iamnatha/TP_JS.git`

3. `$ yarn install`

4. `$ yarn start`

# Explication du projet

Chaque ville posséde une divinité, une troupe et un commerce.

Vous trouverez:  
- une classe divinity  :pray:  
- une classe business  :moneybag: :corn:  
- une classe troop     :guardsman:  
- une classe soldat    :trollface:  
- une classe city      :european_castle:  
    
La classe Businness contient le nombre d'or et le nombre de mais.
Elle permet d'acheter et de vendre du mais avec un risque de se faire attaquer et de perdre les ressources. 

La classe Troop contient une liste de soldat et elle est capable d'attaquer des troupes adverse, 
d'attaquer une ville adverse et défendre sa ville.

La classe Soldier défini un soldat avec des points de vie et une durée de vie au bout de laquelle il meurt de vieillesse. 

La classe Divinity génère des ressources. La quantité est relative à la quantité d'offrandes que lui a consacré la ville.


La classe City contient une troupe, un business et une divinity.


