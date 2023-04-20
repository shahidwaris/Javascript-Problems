describe("Console Log Test", () => {
    beforeEach(()=>{
        cy.visit('http://127.0.0.1:5500/39_2_prob.html')
    })
    it('Validating console data for 1st API',()=>{
        cy.window().then((win)=>{
            cy.stub(win.console,'log').as('consoleLog');
        })
        
        cy.window().its("console.log").should("be.calledWithExactly",{
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            ,id: 1
            ,title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            ,userId:1
        })
    })
    it('Validating console data for 2nd API',()=>{
        cy.window().then((win)=>{
            cy.stub(win.console,'log').as('consoleLog');
        })
        
        cy.window().its("console.log").should("be.calledWithExactly",{
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            ,id:3
            ,title:"ea molestias quasi exercitationem repellat qui ipsa sit aut"
            ,userId: 1})
    })
    it('Validating console data for 3rd API',()=>{
        cy.window().then((win)=>{
            cy.stub(win.console,'log').as('consoleLog');
        })
        
        cy.window().its("console.log").should("be.calledWithExactly",{
            body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            ,id: 2
            ,title: "qui est esse"
            ,userId: 1})
    })
  });
  
