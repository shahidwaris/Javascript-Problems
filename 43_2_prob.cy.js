describe('Inheritance Example', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/index.html'); // Replace with the path to your inheritance.html file
    });
  
    it('should create Person and Student objects correctly and inherit properties and methods', () => {
      cy.window().then((win) => {
        const alice = new win.Person('Alice', 25);
        const bob = new win.Student('Bob', 22, 'S1234');
  
        cy.wrap(alice).its('name').should('equal', 'Alice');
        cy.wrap(alice).its('age').should('equal', 25);
        cy.wrap(alice.getAgeInDays()).should('equal', 25 * 365);
  
        cy.wrap(bob).its('name').should('equal', 'Bob');
        cy.wrap(bob).its('age').should('equal', 22);
        cy.wrap(bob).its('studentId').should('equal', 'S1234');
  
        cy.spy(win.console, 'log').as('consoleLog');
        bob.getAgeInDays();
        cy.get('@consoleLog').should('be.calledWith', 'Student ID: S1234');
      });
    });
  });
  
