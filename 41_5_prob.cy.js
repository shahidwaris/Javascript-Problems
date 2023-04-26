describe('Memory Management', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/41_5_prob.html');
    });
  
    it('should generate DOM elements on button click', () => {
      cy.get('#generate').click();
      cy.get('div').should('have.length', 10000);
    });
  
    it('should remove DOM elements on button click', () => {
      cy.get('#generate').click();
      cy.get('div').should('have.length', 10000);
      cy.get('#remove').click();
      cy.get('div').should('not.exist');
    });
  
    it('should show memory usage and alert when limit is exceeded', () => {
      cy.window().then((win) => {
        cy.stub(win.performance.memory, 'usedJSHeapSize').value(55000000); // set usage to 55 MB
        cy.get('#generate').click();
        cy.on('window:alert', (text) => {
          expect(text).to.equal('Memory usage has exceeded 50 MB. Please optimize your actions to reduce memory consumption.');
        });
      });
    });
  });
  
