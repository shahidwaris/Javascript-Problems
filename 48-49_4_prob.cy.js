describe('Color Switcher', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/'); // Visit your React app's root path
    });
  
    it('should render the Color Switcher correctly', () => {
      cy.get('button').contains('Change color').should('be.visible');
      cy.get('div[style]').should('have.attr', 'style', 'width: 200px; height: 200px; background-color: rgb(0, 0, 0);');
    });
  
    it('should change the color when the button is clicked', () => {
      cy.get('button').contains('Change color').click();
  
      cy.get('div[style]').should(($div) => {
        const style = $div.attr('style');
        expect(style).to.match(/width: 200px; height: 200px; background-color: rgb\(\d{1,3}, \d{1,3}, \d{1,3}\);/);
        expect(style).not.to.equal('width: 200px; height: 200px; background-color: rgb(0, 0, 0);');
      });
    });
  });
  
