import height from "../src/height.js";

describe('height()', () => {
  it('should return NaN if the data is not an array', () => {
    const data = 'foo';
    expect(height(data)).toBeNaN();
  });
  
  it('should return NaN if the data is not an array', () => {
    const data = ['foo', 1, 2];
    expect(height(data)).toBeNaN();
  });
  
  it('should return NaN if the array is not of length 5', () => {
    const data = [1, 1, 2, 2, 4];
    expect(data.length).toBe(5);
  });

  it('should return the height of the triangle. which is 12 ', () => {
    const data = [5, 12, 13, 90];
    expect(height(data)).toBe(12);
  });
});