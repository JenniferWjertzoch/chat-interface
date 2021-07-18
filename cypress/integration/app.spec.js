/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Should have text inside', () => {
    // https://on.cypress.io/type
    cy.get('[data-cy=input]')
      .type('Hello World')
      .should('have.value', 'Hello World')
  })

  it('Click on the send button', () => {
    // https://on.cypress.io/type
    cy.get('[data-cy=send-btn]')
      .click()
    cy.wait(3000)
  })
})
