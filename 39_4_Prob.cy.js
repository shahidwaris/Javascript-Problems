describe("Search-as-You-Type", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500/prob_39_4.html");
    });
  
    it("should display 'No results found.' when no search results are found", () => {
      cy.get("#search-input").type("cypress testing framework");
      cy.get("#search-results").should("contain", "No results found.");
    });
  
    it("should display search results when search query is entered", () => {
      cy.intercept(
        "GET",
        "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=*"
      ).as("searchResults");
  
      cy.get("#search-input").type("cypress");
      cy.wait("@searchResults");
  
      cy.get(".result").should("have.length.at.least", 1);
      cy.get(".result-title").should("contain", "Cypress");
      cy.get(".result-snippet").should("exist");
      cy.get(".result-url").contains("http://cypress.urbanup.com/");
    });
  
    it("should clear search results when search input is empty", () => {
      cy.get("#search-input").type("cypress");
      cy.get("#search-results").should("not.be.empty");
      cy.get("#search-input").clear();
      cy.get("#search-results").should("be.empty");
    });
  
    it("should debounce search input by 500ms", () => {
      cy.intercept(
        "GET",
        "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=*"
      ).as("searchResults");
  
      cy.get("#search-input").type("cypress");
      cy.wait(400);
      cy.get("#search-input").type(" testing");
      cy.wait(200);
      cy.get("#search-input").type(" framework");
      cy.wait("@searchResults");

      cy.get("#search-results > div").should("have.length",1);
      cy.get("#search-results").should("not.contain", "Cypress");
      cy.get("#search-results").should("contain", "No results found.");
    });
  });
  
