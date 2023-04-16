describe('Event loop behavior', () => {
    it('Executes a microtask', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog');
        Promise.resolve().then(() => {
          expect('@consoleLog').to.be.calledWith('Microtask executed');
        });
      });
    });
  
    it('Executes a macrotask', () => {
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog');
        cy.clock();
        setTimeout(() => {
          expect('@consoleLog').to.be.calledWith('Macrotask executed');
        }, 0);
        cy.tick(1);
      });
    });
  });
  
