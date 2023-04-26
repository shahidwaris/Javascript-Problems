describe("Secret Message Decoder", () => {
    it("decodes the secret message correctly", () => {
      cy.visit("http://127.0.0.1:5500/41_3_prob.html");
      cy.window().then((win) => {
        win.secretMessage = {
          encrypted: "Uryyb, Jbeyq!",
          rot: 13,
        };
        win.decodeMessage = (message, rot) => {
          return message.replace(/[a-zA-Z]/g, (char) => {
            const charCode = char.charCodeAt(0);
            const base = charCode >= 65 && charCode <= 90 ? 65 : 97;
            return String.fromCharCode(((charCode - base + rot) % 26) + base);
          });
        };
      });
  
      cy.spy(console, "log").as("consoleLog");
  
      cy.get("script").invoke("text").then((scriptText) => {
        eval(scriptText);
        cy.get("@consoleLog")
          .should(
            "have.been.calledWithExactly",
            "Decoded secret message:",
            "Hello, World!"
          );
      });
    });
  });
  
