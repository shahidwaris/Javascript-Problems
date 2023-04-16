describe("Real-time Notifications", () => {
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500/prob_40_5.html");
    });
  
    it("connects to the WebSocket server", () => {
        cy.window().should('have.property', 'WebSocket')
        cy.window().its('socket').should('be.undefined')
    
        cy.get('#status').should('have.text', 'Connecting...')
    
        cy.window().then((win) => {
          const socketUrl = 'wss://socketsbay.com/wss/v2/1/demo/'
          const socket = new win.WebSocket(socketUrl)
          cy.wrap(socket).as('socket')
        })
    
        cy.get('@socket').should('have.property', 'readyState', 0)
    
        cy.get('#status').should('have.text', 'Connected')
        cy.get('#message-input').should('not.be.disabled')
        cy.get('#send-button').should('not.be.disabled')
        cy.get('#disconnect-button').should('not.be.disabled')
      })
  
    it("sends and receives messages", () => {
      const message = "Hello, world!";
      cy.get("#message-input").type(message);
      cy.get("#send-button").click();
      cy.get("#notifications").should("have.text", `You sent: ${message}`);
      cy.get("#notifications").should("contain", message);
    });
  
    it("disconnects from the WebSocket server", () => {
      cy.get("#disconnect-button").click();
      cy.window().should("not.have.property", "socket");
      cy.get("#status").should("have.text", "Disconnected");
    });
  
    it("reconnects to the WebSocket server after disconnection", () => {
      cy.get("#disconnect-button").click();
      cy.get("#status").should("have.text", "Disconnected");
      cy.wait(10000); // Wait for reconnection
      cy.window().should("have.property", "WebSocket");
      cy.get("#status").should("have.text", "Connected");
    });
  });
  
