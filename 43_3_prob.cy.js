describe('BankAccount and SavingsAccount classes', () => {
    it('creates an instance of BankAccount with the correct properties', () => {
      const bankAccount = new BankAccount('123456', 1000);
      expect(bankAccount.accountNumber).to.equal('123456');
      expect(bankAccount.balance).to.equal(1000);
    });
  
    it('deposits money correctly into BankAccount', () => {
      const bankAccount = new BankAccount('123456', 1000);
      bankAccount.deposit(500);
      expect(bankAccount.balance).to.equal(1500);
    });
  
    it('withdraws money correctly from BankAccount with sufficient balance', () => {
      const bankAccount = new BankAccount('123456', 1000);
      bankAccount.withdraw(500);
      expect(bankAccount.balance).to.equal(500);
    });
  
    it('does not withdraw money from BankAccount with insufficient balance', () => {
      const bankAccount = new BankAccount('123456', 1000);
      cy.spy(console, 'log').as('consoleLog');
  
      bankAccount.withdraw(1500);
  
      cy.get('@consoleLog').should('have.been.calledWith', 'Insufficient balance');
      expect(bankAccount.balance).to.equal(1000);
    });
  
    it('creates an instance of SavingsAccount with the correct properties', () => {
      const savingsAccount = new SavingsAccount('123456', 1000, 0.01);
      expect(savingsAccount.accountNumber).to.equal('123456');
      expect(savingsAccount.balance).to.equal(1000);
      expect(savingsAccount.interestRate).to.equal(0.01);
    });
  
    it('withdraws money correctly from SavingsAccount with sufficient balance', () => {
      const savingsAccount = new SavingsAccount('123456', 1000, 0.01);
      savingsAccount.withdraw(500);
      expect(savingsAccount.balance).to.equal(500);
    });
  
    it('does not withdraw money from SavingsAccount with insufficient balance', () => {
      const savingsAccount = new SavingsAccount('123456', 1000, 0.01);
      cy.spy(console, 'log').as('consoleLog');
  
      savingsAccount.withdraw(1500);
  
      cy.get('@consoleLog').should('have.been.calledWith', 'Insufficient balance');
      expect(savingsAccount.balance).to.equal(1000);
    });
  
    it('calculates interest and deposits it into SavingsAccount', () => {
      const savingsAccount = new SavingsAccount('123456', 1000, 0.01);
      const interest = savingsAccount.balance * savingsAccount.interestRate;
      savingsAccount.deposit(interest);
      expect(savingsAccount.balance).to.equal(1010);
    });
  });
