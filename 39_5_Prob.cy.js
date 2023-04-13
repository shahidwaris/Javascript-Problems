describe("Rate Limiting API Calls", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500/prob_39_5.html");
    });
  
    it("fetches data and displays it when fetch button is clicked", () => {
      cy.get("#fetch-button").click();
      cy.get("#results").contains("ID:");
    });
  
    it("limits API calls to 5 per 10 seconds", () => {
      // Make 5 API calls within 10 seconds
      for (let i = 0; i < 5; i++) {
        cy.get("#fetch-button").click();
      }
      // Attempt to make an additional API call within the same 10-second window
      cy.get("#fetch-button").click();
      // Expect the API call to fail and display an error message
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Too many API calls. Please wait and try again.");
      });
    });
  
    it("resets the click count after 10 seconds", () => {
      // Make 3 clicks
      cy.get("#fetch-button").click();
      cy.get("#fetch-button").click();
      cy.get("#fetch-button").click();
      cy.get("#click-count").contains("3");
      // Wait for 11 seconds
      cy.wait(11000);
      // Expect the click count to be reset to 0
      cy.get("#click-count").contains("0");
    });
  });
  
