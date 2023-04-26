describe('sortScrolls', () => {
    it('returns an empty array when given an empty array', () => {
      const arr = [];
      const result = sortScrolls(arr);
      expect(result).to.deep.equal([]);
    });
  
    it('returns the same array when given an array with a single element', () => {
      const arr = [42];
      const result = sortScrolls(arr);
      expect(result).to.deep.equal([42]);
    });
  
    it('sorts an array of numbers in ascending order', () => {
      const arr = [3, 5, 1, 4, 2];
      const result = sortScrolls(arr);
      expect(result).to.deep.equal([1, 2, 3, 4, 5]);
    });
  
    it('sorts an array of strings in alphabetical order', () => {
      const arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
      const result = sortScrolls(arr);
      expect(result).to.deep.equal(['apple', 'banana', 'cherry', 'date', 'elderberry']);
    });
  });
  
  describe('mergeScrolls', () => {
    it('returns an empty array when given two empty arrays', () => {
      const left = [];
      const right = [];
      const result = mergeScrolls(left, right);
      expect(result).to.deep.equal([]);
    });
  
    it('returns the same array when given one non-empty array and one empty array', () => {
      const left = [1, 2, 3];
      const right = [];
      const result = mergeScrolls(left, right);
      expect(result).to.deep.equal([1, 2, 3]);
    });
  
    it('merges two sorted arrays of numbers in ascending order', () => {
      const left = [1, 3, 5];
      const right = [2, 4, 6];
      const result = mergeScrolls(left, right);
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });
  
    it('merges two sorted arrays of strings in alphabetical order', () => {
      const left = ['apple', 'cherry', 'elderberry'];
      const right = ['banana', 'date'];
      const result = mergeScrolls(left, right);
      expect(result).to.deep.equal(['apple', 'banana', 'cherry', 'date', 'elderberry']);
    });
  });
