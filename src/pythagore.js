function isRectangle(a, b, c) {
  const sides = [a, b, c].sort((x, y) => x - y);
  const isPythagorean = sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
  return isPythagorean;
}

const result = isRectangle(3, 4, 5);
console.log(result);  // Cela affichera true car le triangle avec ces côtés est rectangle (3^2 + 4^2 = 5^2).
