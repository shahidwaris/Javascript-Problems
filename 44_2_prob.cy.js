describe('Shopping Cart', () => {
    beforeEach(() => {
      // Load the HTML file
      cy.visit('http://127.0.0.1:5500/sample.html');
    });
  
    it('should display an empty cart on page load', () => {
      // Check that the cart is initially empty
      cy.get('#cart').should('be.empty');
    });
  
    it('should add an item to the cart', () => {
      // Add an item to the cart
      cy.get('#item').type('Apple');
      cy.get('#price').type('10');
      cy.get('input[type="button"]').click();
  
      // Check that the item has been added to the cart
      cy.get('#cart').should('not.be.empty');
      cy.get('#cart li').should('have.length', 1);
      cy.get('#cart li').should('contain.text', 'Apple - Rs.10');
    });
  
    it('should display the saved cart on page reload', () => {
      // Add an item to the cart
      cy.get('#item').type('Banana');
      cy.get('#price').type('20');
      cy.get('input[type="button"]').click();
  
      // Reload the page
      cy.reload();
  
      // Check that the saved item is displayed in the cart
      cy.get('#cart').should('not.be.empty');
      cy.get('#cart li').should('have.length', 1);
      cy.get('#cart li').should('contain.text', 'Banana - Rs.20');
    });
  });
  
