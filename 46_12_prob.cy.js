describe("Aryabhatta's Message Decrypter", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500/index.html");
    });
  
    it("displays the page title", () => {
      cy.get("h1").should("contain", "Aryabhatta's Message Decrypter");
    });
  
    it("displays decrypted messages in sorted order", () => {
      const expectedMessages = [
        { date: "2023-04-09", content: "Coduin gchiere" },
        { date: "2023-04-10", content: "Anothe_ test message" },
        { date: "2023-04-11", content: "This is a test message" },
        { date: "2023-04-12", content: "Regisnein ghitke" },
      ];
  
      cy.get("#message-container")
        .find("li")
        .should("have.length", expectedMessages.length);
  
      expectedMessages.forEach((message, index) => {
        const expectedText = `${message.date}: ${message.content}`;
        cy.get("#message-container")
          .find("li")
          .eq(index)
          .should("contain", expectedText);
      });
    });
  });
  
