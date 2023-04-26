class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;
  }

  makeSound() {
    super.makeSound();
    console.log(`(${this.breed} breed)`);
  }
}

describe('Animal and Dog classes', () => {
  it('creates an instance of Animal with the correct properties', () => {
    const animal = new Animal('Tiger', 'Roar');
    expect(animal.name).to.equal('Tiger');
    expect(animal.sound).to.equal('Roar');
  });

  it('creates an instance of Dog with the correct properties', () => {
    const dog = new Dog('Fido', 'Woof', 'Poodle');
    expect(dog.name).to.equal('Fido');
    expect(dog.sound).to.equal('Woof');
    expect(dog.breed).to.equal('Poodle');
  });

  it('makes a sound when the makeSound method is called', () => {
    const animal = new Animal('Tiger', 'Roar');
    cy.spy(console, 'log').as('consoleLog');

    animal.makeSound();

    cy.get('@consoleLog').should('have.been.calledWith', 'Roar');
  });

  it('makes a sound with breed when the makeSound method is called on a Dog instance', () => {
    const dog = new Dog('Fido', 'Woof', 'Poodle');
    cy.spy(console, 'log').as('consoleLog');

    dog.makeSound();

    cy.get('@consoleLog').should('have.been.calledWith', 'Woof');
    cy.get('@consoleLog').should('have.been.calledWith', '(Poodle breed)');
  });
});
