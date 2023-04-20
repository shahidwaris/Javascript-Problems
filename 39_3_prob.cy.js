describe("Console Log Test", () => {
    beforeEach(()=>{
        cy.visit('http://127.0.0.1:5500/39_3_prob/39_3_prob.html')
    })
    it('Validating console data for 1st API',()=>{
        cy.window().then((win)=>{
            cy.stub(win.console,'log').as('consoleLog');
        })
        
        cy.window().its("console.log").should("be.calledWithExactly","This content is from file 1")
        cy.window().its("console.log").should("be.calledWithExactly","This content is from file 2")
        cy.window().its("console.log").should("be.calledWithExactly","This content is from file 3")
        cy.window().its("console.log").should("be.calledWithExactly","This content is from file 4")
        cy.window().its("console.log").should("be.calledWithExactly","This content is from file 5")
    })
  });
  
