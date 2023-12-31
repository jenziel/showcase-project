// User flow 2 :
// As a user I can search the collection  based on keywords and the homepage 
// will display preview views of art piece cards.

const searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=clown&limit=20`
const clownUrl1 = `https://api.artic.edu/api/v1/artworks/230694`
const clownUrl2 = `https://api.artic.edu/api/v1/artworks/38636`
describe('Userflow 1', () => {
  beforeEach(()=>{
    cy.intercept("GET", searchUrl,
    {fixture: 'searchResults.json'}).as("getResults")
    cy.intercept("GET", clownUrl1,
    {fixture: 'clownDetails1.json'}).as("getClown1")
    cy.intercept("GET", clownUrl2,
    {fixture: 'clownDetails2.json'}).as("getClown2")
  })
  it('Should show the homepage on pageload.', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search-bar').type('clown')
    cy.get('.search-btn').click()
    cy.wait('@getResults')
    cy.contains(".LoadingComponent").should("not.exist");
  })
})