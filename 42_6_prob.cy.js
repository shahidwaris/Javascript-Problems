describe('Bank, Account, CheckingAccount, SavingsAccount and CreditCardAccount classes', () => {
  let bank;

  beforeEach(() => {
    bank = new Bank();
  });

  it('adds and removes accounts correctly from Bank', () => {
    const account1 = new Account('123456', 1000);
    const account2 = new Account('789012', 500);
    bank.addAccount(account1);
    bank.addAccount(account2);
    expect(bank.accounts).to.deep.equal([account1, account2]);

    bank.removeAccount(account1);
    expect(bank.accounts).to.deep.equal([account2]);
  });

  it('calculates the total assets correctly for Bank', () => {
    const account1 = new Account('123456', 1000);
    const account2 = new Account('789012', 500);
    bank.addAccount(account1);
    bank.addAccount(account2);
    expect(bank.getTotalAssets()).to.equal(1500);
  });

  it('deposits money correctly into Account', () => {
    const account = new Account('123456', 1000);
    account.deposit(500);
    expect(account.balance).to.equal(1500);
    expect(account.transactionHistory).to.deep.equal([{ type: "deposit", amount: 500 }]);
  });

  it('withdraws money correctly from Account with sufficient balance', () => {
    const account = new Account('123456', 1000);
    account.withdraw(500);
    expect(account.balance).to.equal(500);
    expect(account.transactionHistory).to.deep.equal([{ type: "withdrawal", amount: 500 }]);
  });

  it('does not withdraw money from Account with insufficient balance', () => {
    const account = new Account('123456', 500);
    cy.spy(console, 'log').as('consoleLog');

    account.withdraw(1000);

    cy.get('@consoleLog').should('have.been.calledWith', 'Insufficient balance');
    expect(account.balance).to.equal(500);
    expect(account.transactionHistory).to.deep.equal([]);
  });

  it('transfers money correctly from one Account to another with sufficient balance', () => {
    const account1 = new Account('123456', 1000);
    const account2 = new Account('789012', 500);

    account1.transfer(500, account2);

    expect(account1.balance).to.equal(500);
    expect(account2.balance).to.equal(1000);
    expect(account1.transactionHistory).to.deep.equal([{ type: "withdrawal", amount: 500 }]);
    expect(account2.transactionHistory).to.deep.equal([{ type: "deposit", amount: 500 }]);
  });

  it('does not transfer money from one Account to another with insufficient balance', () => {
    const account1 = new Account('123456', 500);
    const account2 = new Account('789012', 500);
    cy.spy(console, 'log').as('consoleLog');

    account1.transfer(1000, account2);

    cy.get('@consoleLog').should('have.been.calledWith', 'Insufficient balance');
    expect(account1.balance).to.equal(500);
    expect(account2.balance).to.equal(500);
    expect(account1.transactionHistory).to.deep.equal([]);
    expect(account2.transactionHistory).to.deep.equal([]);
  });

  it('withdraws money correctly from CheckingAccount with sufficient balance and overdraft limit', () => {
    const checkingAccount = new CheckingAccount('123456', 1000, 500);
    checkingAccount.withdraw(1500);
    expect(checkingAccount.balance).to.equal(-500);
    expect(checkingAccount.transactionHistory).to.deep.equal([{ type: "withdrawal", amount: 1500 }]);
  });

  it('does not withdraw money from CheckingAccount with insufficient funds and overdraft limit', () => {
    const checkingAccount = new CheckingAccount('123456', 1000, 500);
    cy.spy(console, 'log').as('consoleLog');

    checkingAccount.withdraw(2000);

    cy.get('@consoleLog').should('have.been.calledWith', 'Insufficient funds');
    expect(checkingAccount.balance).to.equal(1000);
    expect(checkingAccount.transactionHistory).to.deep.equal([]);
  });

  it('withdraws money correctly from SavingsAccount and calculates interest', () => {
    const savingsAccount = new SavingsAccount('123456', 1000, 0.01);
    const interest = savingsAccount.calculateInterest();
    expect(savingsAccount.balance).to.equal(1010);
    expect(savingsAccount.transactionHistory).to.deep.equal([{ type: "deposit", amount: interest }]);
  });

  it('withdraws money correctly from CreditCardAccount within credit limit and earns reward points', () => {
    const creditCardAccount = new CreditCardAccount('123456', 0, 1000, 0);
    creditCardAccount.withdraw(500);
    expect(creditCardAccount.balance).to.equal(500);
    expect(creditCardAccount.rewardPoints).to.equal(5);
    expect(creditCardAccount.transactionHistory).to.deep.equal([{ type: "withdrawal", amount: 500 }]);
  });

  it('does not withdraw money from CreditCardAccount beyond credit limit', () => {
    const creditCardAccount = new CreditCardAccount('123456', 0, 1000, 0);
    cy.spy(console, 'log').as('consoleLog');

    creditCardAccount.withdraw(1500);

    cy.get('@consoleLog').should('have.been.calledWith', 'Exceeds credit limit');
    expect(creditCardAccount.balance).to.equal(0);
    expect(creditCardAccount.rewardPoints).to.equal(0);
    expect(creditCardAccount.transactionHistory).to.deep.equal([]);
  });
});
