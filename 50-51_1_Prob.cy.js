describe("Magical React Kingdom", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should display the header and the Wizard component", () => {
      cy.get(".App>h1").should("have.text", "Magical React Kingdom");
      cy.get('.App>div>h1').should("have.text", "Wizard Component");
    });
  
    it("should display the Apprentice component with the correct magic potion", () => {
        cy.get('.App>div>div>h2').should("exist");
        cy.get('.App>div>div>p').should("have.text", "The magic potion is: Elixir of React");
    });
  });
  
