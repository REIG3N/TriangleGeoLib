/**
* Calculates the median of a triangle side.
*
* @param {number} ab Any type of number (excluded Boolean, String and NaN variables types).
* @param {number} am Any type of number (excluded Boolean, String and NaN variables types).
* @param {number} ac Any type of number (excluded Boolean, String and NaN variables types).
* @param {number} an Any type of number (excluded Boolean, String and NaN variables types).
* @returns {string} The lines are parrallel or not despite of Thales theorem
*/

export default function thales(ab, am, ac, an) {

    // Vérify if the four different side of the triangle are proportionals
    const result = am / ab === an / ac;

    // Return the suitable message if the input isn't a number
    if(isNaN(ab) || isNaN(am) || isNaN(ac) || isNaN(an)) {

        return NaN // Return a non number type as a error message

    }

    // Return the suitable message if the result is a number
    if(!isNaN(ab) && !isNaN(am) && !isNaN(ac) && !isNaN(an) && result) {

        const message = "On a un point appartenant à une droite et un autre à l'autre droite.\nCes deux droites se croisent en un même point.\nDeux droites parrallèles sont compris dans cet ensemble, consituant donc un triangle, et d'après le théorème de Thalès sont donc parrallèles entre eux.\nPar conséquent, les rapports entre chaque droites sont tous égaux et de même valeur."
        return message // It is parallels if the equality beetween the ratio of the four sides is correct

    } else {

        const message = "On a deux droites qui se croisent en un même point. Donc d'après le théorème de Thalès, les droites ne sont pas parrallèles entre eux.\nIl peuvent néanmoins constituer un triangle avec une droite rejoignant les extrémités qui ne correspondent aucunement au point de jointure.\nPar conséquent, les rapports entre ces droites sont différents et n'ont pas la même valeur."
        return message // It is not if the equality beetween the ratio of the four sides isn't correct
        
    }

}
