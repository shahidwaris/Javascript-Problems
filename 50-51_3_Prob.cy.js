describe("ClockComponent", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should display the clock component", () => {
      cy.get(".clock").should("exist");
    });
  
    it("should display the current time", () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
  
      cy.get(".clock h1").should("have.text", `${hours}:${minutes}:${seconds}`);
    });
  
    it("should update the time every second", () => {
      const date1 = new Date();
      const hours1 = date1.getHours().toString().padStart(2, "0");
      const minutes1 = date1.getMinutes().toString().padStart(2, "0");
      const seconds1 = date1.getSeconds().toString().padStart(2, "0");
  
      cy.get(".clock h1").should("have.text", `${hours1}:${minutes1}:${seconds1}`);
  
      const date2 = new Date();
      const hours2 = date2.getHours().toString().padStart(2, "0");
      const minutes2 = date2.getMinutes().toString().padStart(2, "0");
      const seconds2 = date2.getSeconds().toString().padStart(2, "0");
  
      cy.get(".clock h1").should("have.text", `${hours2}:${minutes2}:${seconds2}`);
    });
  });
  
