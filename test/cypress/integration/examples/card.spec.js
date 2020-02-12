/// <reference types="cypress" />

context('Create', () => {
  beforeEach(() => {
    cy.visit('card/new')
  })

  it('do not write a word also a meaning thus appear an error', () => {
    cy.get('.save').click()
    cy.get('.vunki-error').should('have.length', 2)
  })

  it('type word in the text input and appear one error', () => {
    cy.get('input[name="word"]').type('Hallo')
    cy.get('.save').click()
    cy.get('.vunki-error').should('have.length', 1)
  })

  it('type meaning in the text input and appear not appear errors', () => {
    cy.get('.save').click()
    cy.get('input[name="word"]').type('Hallo')
    cy.get('input[name="meaning"]').type('Hola')
    cy.get('.vunki-error').should('have.length', 0)
  })

  it('form is correct it clear the form and show the feedback', () => {
    cy.get('input[name="word"]').type('Hallo')
    cy.get('input[name="meaning"]').type('Hola')
    cy.get('.save').click()
    cy.get('.toast').should('be.visible')
  })
})
