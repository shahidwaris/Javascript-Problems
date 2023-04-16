describe('Caching API Data', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/prob_40_6.html');
    });
  
    it('loads the page correctly', () => {
      cy.get('head title').should('contain', 'Caching API Data');
      cy.get('#fetch-button').should('exist');
      cy.get('#results').should('exist');
    });
  
    it('fetches and displays data when the Fetch Data button is clicked', () => {
      cy.intercept('GET', 'https://opentdb.com/api.php?amount=3').as('apiRequest');
      cy.get('#fetch-button').click();
      cy.wait('@apiRequest');
      cy.get('#results').should('not.be.empty');
    });
  
    it('caches the fetched data and serves it from cache when the button is clicked again within 1 minute', () => {
      cy.intercept('GET', 'https://opentdb.com/api.php?amount=3').as('apiRequest');
      cy.get('#fetch-button').click();
      cy.wait('@apiRequest');
      cy.get('#results').should('not.be.empty');
      cy.get('#results').invoke('text').then((firstResult) => {
        cy.wait(1000); // wait 1 second before clicking again
        cy.get('#fetch-button').click();
        cy.get('#results').should('have.text', firstResult);
      });
    });
  
    it('fetches new data when the button is clicked again after 1 minute', () => {
      cy.intercept('GET', 'https://opentdb.com/api.php?amount=3').as('apiRequest');
      cy.get('#fetch-button').click();
      cy.wait('@apiRequest');
      cy.get('#results').should('not.be.empty');
      cy.get('#results').invoke('text').then((firstResult) => {
        cy.wait(61000); // wait 61 seconds before clicking again
        cy.get('#fetch-button').click();
        cy.wait('@apiRequest');
        cy.get('#results').should('not.have.text', firstResult);
      });
    });
  });
  
