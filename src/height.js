/**
 * Calculate the height of a triangle using the Pythagorean theorem.
 *
 * @param {number[]} data - The sides of the triangle and the angle in degrees.
 * @returns {number} The height of the triangle.
 */



export function getHeight(base, side1, side2, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  const height = Math.sin(angleInRadians) * Math.sqrt(side1**2 - ((base**2 + side1**2 - side2**2) / (2 * base))**2);

  const result = Math.round(height);
  return result;
}


// // Test
// const baseLength = 5;
// const side1Length = 12;
// const side2Length = 13;
// const angleInDegrees = 90;

// const heightResult = getHeight(baseLength, side1Length, side2Length, angleInDegrees);
// console.log(heightResult);  // Affiche la hauteur calculée en tant qu'entier
