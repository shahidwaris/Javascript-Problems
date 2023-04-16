describe('Dark Mode', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/sample.html')
    })
  
    it('should toggle dark mode on click', () => {
        cy.get('.slider').click()
      cy.get('body').should('have.class', 'dark-mode')
      cy.get('#dark-mode-toggle').should('be.checked')
    })
  
    it('should save and load dark mode setting from localStorage', () => {
        cy.get('.slider').click()
      cy.reload()
      cy.get('body').should('have.class', 'dark-mode')
      cy.get('#dark-mode-toggle').should('be.checked')
    })
  })
