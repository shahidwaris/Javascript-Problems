describe('Animal', () => {
  it('creates an animal with name and sound', () => {
    const animal = new Animal('cat', 'meow');
    expect(animal.name).to.equal('cat');
    expect(animal.sound).to.equal('meow');
  });

  it('has a makeSound method that logs the sound', () => {
    const animal = new Animal('dog', 'bark');
    cy.spy(console, 'log').as('consoleLog');
    animal.makeSound();
    cy.get('@consoleLog').should('be.calledWith', 'bark');
  });
});

describe('Dog', () => {
  it('creates a dog with name, sound, and breed', () => {
    const dog = new Dog('Rex', 'woof', 'German Shepherd');
    expect(dog.name).to.equal('Rex');
    expect(dog.sound).to.equal('woof');
    expect(dog.breed).to.equal('German Shepherd');
  });

  it('has a makeSound method that logs the sound and breed', () => {
    const dog = new Dog('Fido', 'bark', 'Golden Retriever');
    cy.spy(console, 'log').as('consoleLog');
    dog.makeSound();
    cy.get('@consoleLog').should('be.calledWith', 'bark');
    cy.get('@consoleLog').should('be.calledWith', 'Breed: Golden Retriever');
  });
});
