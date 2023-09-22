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
