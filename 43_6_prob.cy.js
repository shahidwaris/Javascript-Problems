describe('Employee and Manager classes', () => {
    it('creates an instance of Employee with the correct properties', () => {
      const employee = new Employee('John Smith', 50000);
      expect(employee.name).to.equal('John Smith');
      expect(employee.salary).to.equal(50000);
    });
  
    it('gives a raise to Employee correctly', () => {
      const employee = new Employee('John Smith', 50000);
      employee.giveRaise(5000);
      expect(employee.salary).to.equal(55000);
    });
  
    it('creates an instance of Manager with the correct properties', () => {
      const manager = new Manager('Jane Doe', 80000, 'Marketing');
      expect(manager.name).to.equal('Jane Doe');
      expect(manager.salary).to.equal(80000);
      expect(manager.department).to.equal('Marketing');
    });
  
    it('gives a raise to Manager correctly', () => {
      const manager = new Manager('Jane Doe', 80000, 'Marketing');
      cy.spy(console, 'log').as('consoleLog');
  
      manager.giveRaise(10000);
  
      cy.get('@consoleLog').should('have.been.calledWith', 'New salary for Jane Doe in Marketing: 90000');
      expect(manager.salary).to.equal(90000);
    });
  });
