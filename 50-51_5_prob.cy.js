describe("RotatingCube", () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it("should render correctly", () => {
      cy.get(".cube-container").should("be.visible");
      cy.get(".cube").should("have.length", 1);
      cy.get(".face").should("have.length", 6);
    });
  
    it("should rotate the cube on mouse drag", () => {
      cy.get(".cube").trigger("mousedown", { clientX: 50, clientY: 50 })
        .trigger("mousemove", { clientX: 100, clientY: 50 })
        .trigger("mousemove", { clientX: 150, clientY: 100 })
        .trigger("mouseup");
      cy.get(".cube").invoke("attr", "style").should("contain", "transform: rotateX(-80deg) rotateY(145deg);");
    });
  
    it("should change cursor style on mouse down", () => {
      cy.get(".cube-container").trigger("mousedown").should("have.css", "cursor", "grab");
    });
  
    it("should change cursor style back on mouse up", () => {
      cy.get(".cube-container").trigger("mousedown").should("have.css", "cursor", "grab");
      cy.get(".cube-container").trigger("mouseup").should("have.css", "cursor", "grab");
    });
  });
  
