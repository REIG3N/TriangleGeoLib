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

        const message = "Les segments MN et BC sont parrallèles selon le théorème de Thalès."
        return message // It is parallels if the equality beetween the ratio of the four sides is correct

    } else {

        const message = "Les segments MN et BC ne sont pas parallèles selon le théorème de Thalès."
        return message // It is not if the equality beetween the ratio of the four sides isn't correct
        
    }

}
  
