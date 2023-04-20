describe("Console Log Test", () => {
    beforeEach(()=>{
        cy.visit('http://127.0.0.1:5500/40_3_prob/40_3_prob.html')
    })
    it('Validating console data',()=>{
        cy.window().then((win)=>{
            cy.stub(win.console,'log').as('consoleLog');
        })
        
        cy.window().its("console.log").should('be.calledWithExactly',{collision: 12000, theft: 2000, liability: 25000})
     })
});
