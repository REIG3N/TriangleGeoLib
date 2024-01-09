/**
 * Execute the Pythagorean theorem to determine if a triangle is rectangle or not.
 *
 * @param {number[]} data - The sides of the triangle.
 * @returns {boolean} True if the triangle is rectangle, false otherwise.
 */

export default function isRectangle(data) {
  if (!Array.isArray(data) || !data.every(Number.isFinite || Number.length == 3)) {
    return NaN;
  }
  else {
    if (data[0]**2 + data[1]**2 === data[2]**2) {
      return true;
    }else {
      return false;
    }
  }
}






















// // Test
// const result = isRectangle(3, 4, 5);
// console.log(result);  // Cela affichera true car le triangle avec ces côtés est rectangle (3^2 + 4^2 = 5^2).
