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
    cy.url().should('eq', 'http://localhost:8080/#/card')
  })
})

context('List', () => {
  beforeEach(() => {
    cy.removeTable()
    cy.visit('/card')
  })

  it('do not have cards', () => {
    cy.window().then(win => {
      cy.contains(win.app.$t('card.table.emptyDeck'))
    })
  })

  it('have a card display table', () => {
    cy.createResource('cards', { word: 'gross', meaning: 'grande', difficulty: 0, deck: 0 })
    cy.contains('gross')
    cy.contains('grande')
    cy.get('.b-table').should('be.visible')
  })
})

context('Edit', () => {
  beforeEach(() => {
    cy.removeTable()
    cy.visit('/card')
  })

  it('Edit a card make the changes', () => {
    cy.createResource('cards', { word: 'gross', meaning: 'grande', difficulty: 0, deck: 0 })
    cy.contains('Edit').click()
    cy.get('input[name="word"]').clear().type('Hallo')
    cy.get('input[name="meaning"]').clear().type('Hola')
    cy.get('.save').click()
    cy.url().should('eq', 'http://localhost:8080/#/card')
    cy.contains('Hallo')
    cy.contains('Hola')
  })
})

context('Remove', () => {
  beforeEach(() => {
    cy.removeTable()
    cy.visit('/card')
  })

  it('click remove card', () => {
    cy.createResource('cards', { word: 'a', meaning: 'b', difficulty: 0, deck: 0 })
    cy.contains('Delete').click()
    cy.window().then(win => {
      cy.contains(win.app.$t('card.table.emptyDeck'))
    })
  })
})
