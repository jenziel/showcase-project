const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=clown&limit=20`;
const clownUrl1 = `https://api.artic.edu/api/v1/artworks/230694`;
const clownUrl2 = `https://api.artic.edu/api/v1/artworks/38636`;

describe("500 error when submitting a searchQuery", () => {
  beforeEach(() => {
    cy.intercept("GET", searchUrl, {
      statusCode: 500,
      body: {
        fixture: "error500.json",
      },
      headers: {
        "Content-Type": "application/json",
      }}).as(
      "throw500"
    );
  });

  it("should display a 500 error when there is one.", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".search-bar").type("clown");
    cy.get(".search-btn").click();
    cy.wait("@throw500");
    cy.contains("Error: 500 Internal Server Error").should("be.visible");
  });
});


describe("404 error when submitting a searchQuery", () => {
  beforeEach(() => {
    cy.intercept("GET", searchUrl, {
      statusCode: 404,
      body: {
        fixture: "error404.json",
      },
      headers: {
        "Content-Type": "application/json",
      }}).as(
      "throw404"
    );
  });
  it("should display a 404 error when there is one.", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".search-bar").type("clown");
    cy.get(".search-btn").click();
    cy.wait("@throw404");
    cy.contains("Error: 404 Not Found").should("be.visible");
  });
});

describe("be able to handle a route that doesn't exist", () => {
it("should display an error for a url that does not exist", () => {
  cy.visit("http://localhost:3000/potato");
  cy.contains("That Page Doesn't Exist.").should("be.visible");
})
});