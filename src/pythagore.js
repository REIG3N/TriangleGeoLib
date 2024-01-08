/**
 * Execute the Pythagorean theorem to determine if a triangle is rectangle or not.
 *
 * @param {number[]} data - The sides of the triangle.
 * @returns {boolean} True if the triangle is rectangle, false otherwise.
 */

export function isRectangle(a, b, c) {
  if (!Array.isArray(data) || !data.every(Number.isFinite)) {
    return console.error("Veuillez entrer des nombres valides.");
  }
  const sides = [a, b, c].sort((x, y) => x - y);
  const isPythagorean = sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
  return isPythagorean;
}

// // Test
// const result = isRectangle(3, 4, 5);
// console.log(result);  // Cela affichera true car le triangle avec ces côtés est rectangle (3^2 + 4^2 = 5^2).
