describe("Console Log Test", () => {
    beforeEach(()=>{
        cy.visit('http://127.0.0.1:5500/40_2_prob/40_2_prob.html')
    })
    it('Validating console data',()=>{
        cy.window().then((win)=>{
            cy.stub(win.console,'log').as('consoleLog');
        })
        
        cy.window().its("console.log").should('be.calledWithExactly',{
            Adam: "83.00",
            Emily: "91.00",
            Jane: "92.00",
            John: "85.00",
            Mark: "78.00",
            Sarah: "88.00"})
     })
});
