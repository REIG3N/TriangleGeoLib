import isRectangle from "../src/pythagore.js";

describe('pythagore()', () => {
  it('should return NaN if the data is not an array', () => {
    const data = 'foo';
    expect(isRectangle(data)).toBeNaN();
  });

  it('should return NaN if the data is not an array', () => {
    const data = ['foo', 1, 2];
    expect(isRectangle(data)).toBeNaN();
  });

  it('should return NaN if the array is not of length 3', () => {
    const data = [1, 1, 2, 2];
    expect(data.length).toBe(4);
  });

  it('should return true if the triangle is rectangle', () => {
    const data = [3, 4, 5];
    expect(isRectangle(data)).toEqual(true);
  });
});