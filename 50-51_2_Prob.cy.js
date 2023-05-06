describe("App component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should display the header and the SpellCaster component", () => {
        cy.get('.App>h1').should("have.text", "Mystical Land of Componentia");
        cy.get('.App>div>h1').should("exist");
    });
  });
  
  describe("SpellCaster component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should display the header and the Spell component with correct props", () => {
        cy.get('.App>div>h1').should("have.text", "Spell Caster Component");
      cy.get("h2").should("have.text", "Spell Component");
      cy.get("p").should("contain.text", "Spell Name: Astral Projection");
      cy.get("p").should("contain.text", "Spell Duration: 1 hour");
      cy.get("p").should("not.contain.text", "This prop should be discarded");
    });
  });
  
  describe("Spell component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should display the spell name and duration", () => {
      cy.get("h2").should("have.text", "Spell Component");
      cy.get("p").should("contain.text", "Spell Name: Astral Projection");
      cy.get("p").should("contain.text", "Spell Duration: 1 hour");
    });
  });
  
