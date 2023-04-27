describe('mergeCraftDates', () => {
    it('merges two arrays of craft dates in ascending order', () => {
      const emilyDates = [3, 7, 12, 20];
      const oliverDates = [1, 5, 8, 18, 25];
      const expected = [1, 3, 5, 7, 8, 12, 18, 20, 25];
  
      const actual = mergeCraftDates(emilyDates, oliverDates);
  
      expect(actual).to.deep.equal(expected);
    });
  
    it('handles empty arrays', () => {
      const emilyDates = [];
      const oliverDates = [];
      const expected = [];
  
      const actual = mergeCraftDates(emilyDates, oliverDates);
  
      expect(actual).to.deep.equal(expected);
    });
  
    it('handles arrays with different lengths', () => {
      const emilyDates = [3, 7, 12, 20];
      const oliverDates = [1, 5];
      const expected = [1, 3, 5, 7, 12, 20];
  
      const actual = mergeCraftDates(emilyDates, oliverDates);
  
      expect(actual).to.deep.equal(expected);
    });
  });
  
