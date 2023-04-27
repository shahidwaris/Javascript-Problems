describe('caesarCipher', () => {
  it('returns an empty string when given an empty string', () => {
    const message = '';
    const shift = 5;
    const result = caesarCipher(message, shift);
    expect(result).to.equal('');
  });

  it('returns the original string when given a shift of 0', () => {
    const message = 'HELLO';
    const shift = 0;
    const result = caesarCipher(message, shift);
    expect(result).to.equal('HELLO');
  });

  it('encodes uppercase letters correctly', () => {
    const message = 'HELLO';
    const shift = 3;
    const result = caesarCipher(message, shift);
    expect(result).to.equal('KHOOR');
  });

  it('encodes lowercase letters correctly', () => {
    const message = 'hello';
    const shift = 3;
    const result = caesarCipher(message, shift);
    expect(result).to.equal('khoor');
  });

  it('wraps around to the beginning of the alphabet when encoding uppercase letters', () => {
    const message = 'XYZ';
    const shift = 3;
    const result = caesarCipher(message, shift);
    expect(result).to.equal('ABC');
  });

  it('wraps around to the beginning of the alphabet when encoding lowercase letters', () => {
    const message = 'xyz';
    const shift = 3;
    const result = caesarCipher(message, shift);
    expect(result).to.equal('abc');
  });
})
