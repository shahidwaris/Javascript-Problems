describe("Enrollment Calculation", () => {
    it("calculates the correct enrollment count for each course", () => {
      cy.visit("http://127.0.0.1:5500/40_4_prob.html");
      cy.window().then((win) => {
        win.enrollmentData = {
          enrollmentData: [
            { student: "Alice", course: "Math" },
            { student: "Bob", course: "Math" },
            { student: "Charlie", course: "English" },
            { student: "David", course: "Science" },
            { student: "Eve", course: "Math" },
            { student: "Frank", course: "English" },
          ],
        };
      });
  
      cy.spy(console, "log").as("consoleLog");
  
      cy.get("script").invoke("text").then((scriptText) => {
        eval(scriptText);
        cy.get("@consoleLog").should("be.calledWith", {
          Math: 3,
          English: 2,
          Science: 1,
        });
      });
    });
  });
  
