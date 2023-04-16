describe("Game High Scores", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500/sample.html");
      localStorage.removeItem("scores");
    });
  
    it("allows the user to submit a score and shows it in the scores list", () => {
      cy.get("#name").type("Alice");
      cy.get("#score").type("100");
      cy.get('input[type="button"]').click();
  
      cy.get("#scores table tr").should("have.length", 2);
      cy.get("#scores table tr:nth-child(2) td:nth-child(1)").should(
        "have.text",
        "Alice"
      );
      cy.get("#scores table tr:nth-child(2) td:nth-child(2)").should(
        "have.text",
        "100"
      );
    });
  
    it("shows scores in descending order", () => {
      cy.get("#name").type("Alice");
      cy.get("#score").type("100");
      cy.get('input[type="button"]').click();
      cy.get("#name").clear().type("Bob");
      cy.get("#score").clear().type("200");
      cy.get('input[type="button"]').click();
      cy.get("#name").clear().type("Charlie");
      cy.get("#score").clear().type("150");
      cy.get('input[type="button"]').click();
  
      cy.get("#scores table tr:nth-child(2) td:nth-child(1)").should(
        "have.text",
        "Bob"
      );
      cy.get("#scores table tr:nth-child(3) td:nth-child(1)").should(
        "have.text",
        "Charlie"
      );
      cy.get("#scores table tr:nth-child(4) td:nth-child(1)").should(
        "have.text",
        "Alice"
      );
    });
  
    it("shows a message when there are no scores", () => {
      cy.get("#scores").should("have.text", "No scores yet");
    });
  
    it("shows scores from localStorage on page load", () => {
      localStorage.setItem(
        "scores",
        JSON.stringify([
          { name: "Alice", score: 100 },
          { name: "Bob", score: 200 },
        ])
      );
  
      cy.reload();
  
      cy.get("#scores table tr").should("have.length", 3);
      cy.get("#scores table tr:nth-child(2) td:nth-child(1)").should(
        "have.text",
        "Bob"
      );
      cy.get("#scores table tr:nth-child(3) td:nth-child(1)").should(
        "have.text",
        "Alice"
      );
    });
  });
  
