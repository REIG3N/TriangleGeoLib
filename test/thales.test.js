import thales from '../src/thales';

describe('median()', () => {

  it('should return NaN if the data is not a number', () => {

    const segmentAB = 'foo';
    const segmentAM = 2;
    const segmentAC = 2.3;
    const segmentAN = 3;

    expect(thales(segmentAM, segmentAB, segmentAN, segmentAC)).toBeNaN();

  });

  it("should return the response that two straight lines are parallels with Thales theorem", () => {

    const segmentAB = 2;
    const segmentAM = 3;
    const segmentAC = 2;
    const segmentAN = 3;

    expect(thales(segmentAM, segmentAB, segmentAN, segmentAC)).toBe(`On a un point appartenant à une droite et un autre à l'autre droite.\nCes deux droites se croisent en un même point.\nDeux droites parrallèles sont compris dans cet ensemble, consituant donc un triangle, et d'après le théorème de Thalès sont donc parrallèles entre eux.\nPar conséquent, les rapports entre chaque droites sont tous égaux et de même valeur.`);

  });

  it("should return the response that two straight lines aren't parallels with Thales theorem", () => {

    const segmentAB = 1;
    const segmentAM = 3;
    const segmentAC = 2.3;
    const segmentAN = 2;

    expect(thales(segmentAM, segmentAB, segmentAN, segmentAC)).toBe(`On a deux droites qui se croisent en un même point. Donc d'après le théorème de Thalès, les droites ne sont pas parrallèles entre eux.\nIl peuvent néanmoins constituer un triangle avec une droite rejoignant les extrémités qui ne correspondent aucunement au point de jointure.\nPar conséquent, les rapports entre ces droites sont différents et n'ont pas la même valeur.`);
    
  });
});