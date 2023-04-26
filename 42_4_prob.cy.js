class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  withdraw(amount) {
    if (this.balance - amount < 0) {
      console.log("Insufficient balance");
    } else {
      super.withdraw(amount);
    }
  }
}

describe('BankAccount and SavingsAccount classes', () => {
  it('creates an instance of BankAccount with the correct properties', () => {
    const bankAccount = new BankAccount('123456', 1000);
    expect(bankAccount.accountNumber).to.equal('123456');
    expect(bankAccount.balance).to.equal(1000);
  });

  it('creates an instance of SavingsAccount with the correct properties', () => {
    const savingsAccount = new SavingsAccount('789012', 500, 0.01);
    expect(savingsAccount.accountNumber).to.equal('789012');
    expect(savingsAccount.balance).to.equal(500);
    expect(savingsAccount.interestRate).to.equal(0.01);
  });

  it('deposits money correctly into BankAccount', () => {
    const bankAccount = new BankAccount('123456', 1000);
    bankAccount.deposit(500);
    expect(bankAccount.balance).to.equal(1500);
  });

  it('deposits money correctly into SavingsAccount', () => {
    const savingsAccount = new SavingsAccount('789012', 500, 0.01);
    savingsAccount.deposit(100);
    expect(savingsAccount.balance).to.equal(600);
  });

  it('withdraws money correctly from BankAccount', () => {
    const bankAccount = new BankAccount('123456', 1000);
    bankAccount.withdraw(500);
    expect(bankAccount.balance).to.equal(500);
  });

  it('withdraws money correctly from SavingsAccount with sufficient balance', () => {
    const savingsAccount = new SavingsAccount('789012', 1000, 0.01);
    savingsAccount.withdraw(500);
    expect(savingsAccount.balance).to.equal(500);
  });

  it('does not withdraw money from SavingsAccount with insufficient balance', () => {
    const savingsAccount = new SavingsAccount('789012', 500, 0.01);
    cy.spy(console, 'log').as('consoleLog');

    savingsAccount.withdraw(1000);

    cy.get('@consoleLog').should('have.been.calledWith', 'Insufficient balance');
    expect(savingsAccount.balance).to.equal(500);
  });
});
