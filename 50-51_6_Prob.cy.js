
describe('Car app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('form');
    });
  
    it('should add a new car when form is submitted', () => {
      cy.get('input[name=brand]').type('Toyota');
      cy.get('input[name=model]').type('Camry');
      cy.get('input[name=year]').type('2021');
      cy.get('input[name=engine]').type('2.5L');
      cy.get('input[name=transmission]').type('Automatic');
      cy.get('input[name=drive]').type('FWD');
      cy.get('input[name=fuel]').type('Gasoline');
      cy.get('input[name=horsepower]').type('203');
  
      const fileName = 'test-image.jpg';
      cy.get('input[type="file"]').then(subject => {
        cy.wrap(subject).fileUpload('test-image.jpg', 'image/jpg');
      });
  
      cy.get('button[type=submit]').click();
  
      cy.get('.car-card').should('have.length', 1);
      cy.get('.car-card img').should('have.attr', 'alt', 'Toyota Camry');
      cy.get('.car-card h2').should('have.text', 'Toyota Camry');
      cy.get('.car-card p').should('have.length', 7);
    });
  
    it('should display previously added cars on page load', () => {
      localStorage.setItem('cars', JSON.stringify([
        {
          brand: 'Toyota',
          model: 'Camry',
          year: '2021',
          engine: '2.5L',
          transmission: 'Automatic',
          drive: 'FWD',
          fuel: 'Gasoline',
          horsepower: '203',
          image: { name: 'test-image.jpg' }
        }
      ]));
  
      cy.reload();
  
      cy.get('.car-card').should('have.length', 1);
      cy.get('.car-card img').should('have.attr', 'alt', 'Toyota Camry');
      cy.get('.car-card h2').should('have.text', 'Toyota Camry');
      cy.get('.car-card p').should('have.length', 7);
    });
  });
  
