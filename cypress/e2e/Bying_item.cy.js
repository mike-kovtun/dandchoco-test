/// <reference types="cypress"/>

import {
  PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Adding item to cart list and buying it', () => {
  beforeEach(() => {
    cy.visit('/')
  Cypress.on('uncaught:exception', (err, runnable) => {
     return false
  })
  cy.clearLocalStorage()
})
 
  it('Adding new item', () => {
    cy.addItemToCart();
    
  })

})