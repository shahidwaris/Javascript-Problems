describe("Lazy loading images", () => {
    beforeEach(()=>{
        cy.visit("http://127.0.0.1:5500/prob_39_6.html");
    })
    it("loads images when they are in the viewport", () => {
      
      cy.get("img.lazy").should("have.length", 21);
  
      // Scroll down to the bottom of the page to trigger loading of all images
      cy.scrollTo("bottom");
  
      // Wait for all images to finish loading
      cy.get("img[data-loaded=true]").should("have.length", 15);
    });
  
    it("only loads images that are in the viewport", () => {
      cy.get("img.lazy").should("have.length", 21);
  
      // Scroll down just enough to bring the first image into view
      cy.scrollTo("bottom");
      cy.scrollTo("top");
  
      // Wait for the first image to finish loading
      cy.get("img[data-loaded=true]").should("have.length", 9);
  
      // Scroll down to the bottom of the page to trigger loading of all remaining images
      cy.scrollTo("bottom");
  
      // Wait for all remaining images to finish loading
      cy.get("img[data-loaded=true]").should("have.length", 15);
    });
  });
  
