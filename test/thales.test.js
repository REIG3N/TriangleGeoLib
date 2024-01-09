import thales from '../src/thales';

describe('median()', () => {

  it('should return NaN if the data is not a number', () => {

    const segmentAB = 'foo';
    const segmentAM = 2;
    const segmentAC = 2.3;
    const segmentAN = 3;

    expect(thales(segmentAM, segmentAB, segmentAN, segmentAC)).toBeNaN();

  });

  it("should return the response that MN and BC are parallels with Thales theorem", () => {

    const segmentAB = 2;
    const segmentAM = 3;
    const segmentAC = 2;
    const segmentAN = 3;

    expect(thales(segmentAM, segmentAB, segmentAN, segmentAC)).toBe(`Les segments MN et BC sont parrallèles selon le théorème de Thalès.`);

  });

  it("should return the response that MN and BC aren't parallels with Thales theorem", () => {

    const segmentAB = 1;
    const segmentAM = 3;
    const segmentAC = 2.3;
    const segmentAN = 2;

    expect(thales(segmentAM, segmentAB, segmentAN, segmentAC)).toBe(`Les segments MN et BC ne sont pas parallèles selon le théorème de Thalès.`);
    
  });
});