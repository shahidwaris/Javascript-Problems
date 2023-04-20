describe("Console Log Test", () => {
    it('Validating console data',()=>{
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.window().then((win)=>{
            cy.stub(win.console,'log').as('consoleLog');
        })
        
        cy.window().its("console.log").should("be.calledWith",{userId: 1, id: 1, title: 'delectus aut autem', completed: false})
    })
  });
  
