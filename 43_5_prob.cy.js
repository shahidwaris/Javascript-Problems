describe('Vehicle and Car classes', () => {
  it('creates an instance of Vehicle with the correct properties', () => {
    const vehicle = new Vehicle('Honda', 'Civic', 2022);
    expect(vehicle.make).to.equal('Honda');
    expect(vehicle.model).to.equal('Civic');
    expect(vehicle.year).to.equal(2022);
  });

  it('starts Vehicle correctly', () => {
    const vehicle = new Vehicle('Honda', 'Civic', 2022);
    cy.spy(console, 'log').as('consoleLog');

    vehicle.start();

    cy.get('@consoleLog').should('have.been.calledWith', 'Engine started');
  });

  it('creates an instance of Car with the correct properties', () => {
    const car = new Car('Honda', 'Civic', 2022, 'blue');
    expect(car.make).to.equal('Honda');
    expect(car.model).to.equal('Civic');
    expect(car.year).to.equal(2022);
    expect(car.color).to.equal('blue');
  });

  it('starts Car correctly', () => {
    const car = new Car('Honda', 'Civic', 2022, 'blue');
    cy.spy(console, 'log').as('consoleLog');

    car.start();

    cy.get('@consoleLog').should('have.been.calledWith', 'Engine started');
    cy.get('@consoleLog').should('have.been.calledWith', 'Radio turned on');
  });
});
