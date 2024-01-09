# TriangleGeoLib

TriangleGeoLib est une librairie JavaScript légère qui propose des fonctions pour effectuer des calculs géométriques sur des triangles. Elle utilise les théorèmes bien connus tels que Pythagore, Thalès, la hauteur et la médiane pour résoudre divers problèmes géométriques.

## Installation

Vous pouvez installer TriangleGeoLib via npm :

```bash
npm install trianglegeolib
```

## Fonctions disponibles

`isRectangle(a, b, c)`
Vérifie si un triangle avec les côtés a,b et c, est un triangle rectangle en appliquant le théorème de Pythagore.

`thallesProportion(a1, b1, a2, b2)`
Calcule les rapports proportionnels en utilisant le théorème de Thalès pour deux paires de côtés a1:b1 et a2:b2.

`calculateHeight(base, side1, side2, angleInDegrees)`
Calcule la longueur de la hauteur d'un triangle rectangle, donnée la base, les côtés adjacents et l'angle opposé à la hauteur.

`calculateMedian(side1, side2, side3)`
Calcule la longueur de la médiane d'un triangle donné les côtés side1, side2 et side3

## Contribution 

Les contributions à TriangleGeoLib sont les bienvenues. Si vous avez des idées d'améliorations, de nouvelles fonctionnalités ou des corrections de bugs, n'hésitez pas à soumettre une Pull Request.

## Licence
TriangleGeoLib est distribué sous la licence MIT.
