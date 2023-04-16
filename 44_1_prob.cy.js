describe('User Authentication', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/sample.html')
    })
  
    it('should log in user with correct credentials and display logout button', () => {
      cy.get('#username').type('user')
      cy.get('#password').type('password')
      cy.get('input[type="button"]').click()
  
      cy.get('#logout').should('be.visible')
    })
  
    it('should display an error message with incorrect credentials', () => {
      cy.get('#username').type('wronguser')
      cy.get('#password').type('wrongpassword')
      cy.get('input[type="button"]').click()
  
      cy.on('window:alert', (message) => {
        expect(message).to.equal('Invalid username or password')
      })
    })
  
    it('should log out user when logout button is clicked', () => {
      cy.get('#username').type('user')
      cy.get('#password').type('password')
      cy.get('input[type="button"]').click()
  
      cy.get('#logout').click()
      cy.get('#logout').should('not.exist')
    })
  })
  
