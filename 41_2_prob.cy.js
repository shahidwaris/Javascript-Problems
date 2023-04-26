describe("Call Stack", () => {
    it("displays the expected function call stack", () => {
      cy.visit("http://127.0.0.1:5500/41_2_prob.html");
      cy.spy(console, "trace").as("consoleTrace");
      cy.get("script").invoke("text").then((scriptText) => {
        eval(scriptText);
        cy.get("@consoleTrace")
          .should("have.callCount", 3)
          .its("firstCall.args.0")
          .should("contain", "Inside baz");
        cy.get("@consoleTrace")
          .its("secondCall.args.0")
          .should("contain", "Inside bar");
        cy.get("@consoleTrace")
          .its("thirdCall.args.0")
          .should("contain", "Inside foo");
      });
    });
  });
  
