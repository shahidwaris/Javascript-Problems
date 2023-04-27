describe('mergeFruitWeights', () => {
    it('should merge two arrays of fruit weights in ascending order', () => {
      const aliceFruits = [1, 5, 9];
      const bobFruits = [2, 4, 7, 10];
      const expectedOutput = [1, 2, 4, 5, 7, 9, 10];
  
      const result = mergeFruitWeights(aliceFruits, bobFruits);
  
      expect(result).to.deep.equal(expectedOutput);
    });
  
    it('should merge two arrays of fruit weights with duplicates', () => {
      const aliceFruits = [1, 5, 9];
      const bobFruits = [2, 4, 5, 7, 10];
      const expectedOutput = [1, 2, 4, 5, 5, 7, 9, 10];
  
      const result = mergeFruitWeights(aliceFruits, bobFruits);
  
      expect(result).to.deep.equal(expectedOutput);
    });
  
    it('should merge two empty arrays', () => {
      const aliceFruits = [];
      const bobFruits = [];
      const expectedOutput = [];
  
      const result = mergeFruitWeights(aliceFruits, bobFruits);
  
      expect(result).to.deep.equal(expectedOutput);
    });
  });
