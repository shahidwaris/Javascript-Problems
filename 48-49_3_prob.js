describe('Form Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/'); // Visit your React app's root path
    });
  
    it('should render the Form Component correctly', () => {
      cy.get('.form-component').should('be.visible');
      cy.get('.form-component h1').should('have.text', 'Form Component');
      cy.get('.input-field').should('be.visible');
      cy.get('.submit-button').should('be.visible');
    });
  
    it('should update the input value and submit the form', () => {
      cy.window().then((win)=>{
        cy.stub(win.console,'log').as('consoleLog');
    })
      const inputValue = 'Hello, Cypress!';
      cy.get('.input-field').type(inputValue).should('have.value', inputValue);
      cy.get('.submit-button').click();
      cy.window().its("console.log").should("be.calledWith",`Submitted value: ${inputValue}`)
    });
  });
  
