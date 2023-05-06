describe("TemperatureConverter component", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should display temperature input and unit selector", () => {
      cy.get("input[type='text']").should("exist");
      cy.get("select").should("exist");
    });
  
    it("should convert temperature from Fahrenheit to Celsius", () => {
      cy.get("input[type='text']").type("32");
      cy.get("select").select("C");
      cy.get("p").should("have.text", "89.60 F");
    });
  
    it("should convert temperature from Celsius to Fahrenheit", () => {
      cy.get("input[type='text']").type("0");
      cy.get("select").select("F");
      cy.get("p").should("have.text", "-17.78 C");
    });
  
    it("should update converted temperature when input or unit changes", () => {
      cy.get("input[type='text']").type("100");
      cy.get("select").select("C");
      cy.get("p").should("have.text", "212.00 F");
  
      cy.get("select").select("F");
      cy.get("p").should("have.text", "37.78 C");
  
      cy.get("input[type='text']").clear().type("50");
      cy.get("p").should("have.text", "10.00 C");
    });
  });
  
