/**
 * Calculate the height of a triangle.
 *
 * @param {number[]} data - The sides of the triangle and the angle in degrees.
 * @returns {number} The height of the triangle.
 */


// base, side1, side2, angleInDegrees
export default function getHeight(data) {
  const angleInRadians = (data[3] * Math.PI) / 180;
  const height = Math.sin(angleInRadians) * Math.sqrt(data[1]**2 - ((data[0]**2 + data[1]**2 - data[2]**2) / (2 * data[0]))**2);

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
