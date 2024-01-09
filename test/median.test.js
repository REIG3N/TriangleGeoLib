import median from '../src/median';

describe('median()', () => {

  it('should return NaN if the data is not a number', () => {

    const length = 'foo';
    expect(median(length)).toBeNaN();

  });

  it("should return the exact median of a length if the result doesn't have numbers after comma", () => {

    const length = 7;
    expect(median(length)).toBe(`Median result : 3.5`);

  });

  it("should return the exact median of a length if the result doesn't have numbers after comma", () => {

    const length = 1.5;
    expect(median(length)).toBe(`Exact Median result: 0.75 -> Rounded Median result : 0.8`);

  });
});