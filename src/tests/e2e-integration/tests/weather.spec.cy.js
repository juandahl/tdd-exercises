/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
describe('template spec', () => {
  it('passes', async () => {
    cy.visit('http://localhost:3000');

    cy.get('input').type('Londres');

    cy.get('ul li:first').click();

    cy.get("h5").should(($p) => {
      expect($p).to.contain("Current Weather");
    })

    cy.get("h5").should(($p) => {
      expect($p).to.contain("Current Temperature");
    })
  })
})