describe("Background component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have correct styles", () => {
    cy.get(".background").should("have.css", {
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      "z-index": "-1",
      overflow: "hidden",
    });

    cy.get(".stars").should("have.css", {
      "font-size": "50px",
      "text-align": "center",
    });
  });

  it("should display Metaverse message", () => {
    cy.get(".stars").should("contain.text", "Enter the Metaverse");
  });

  it("should apply hover styles to stars element", () => {
    cy.get(".stars")
      .trigger("mouseover")
      .should("have.css", {
        position: "absolute",
        cursor: "pointer",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        "background-image": 'url("https://i.gifer.com/origin/68/68395474667ae256ef34e61799344f6b.gif")',
        "background-repeat": "no-repeat",
        "background-size": "cover",
        animation: "zoom-in 10s linear infinite",
      });

    cy.get(".stars")
      .trigger("mouseout")
      .should("not.have.css", "position", "absolute ");
  });
});
