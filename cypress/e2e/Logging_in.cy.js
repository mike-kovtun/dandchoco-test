/// <reference types="cypress"/>

import {
  PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Dandelon chocolate logging in', () => {
  beforeEach(() => {
    cy.visit('/')
  Cypress.on('uncaught:exception', (err, runnable) => {
     return false
  })
  cy.clearLocalStorage()
})
 
  it('Logging via correct user', () => {
    cy.loginFormValidation_UI();
    cy.loggingIn(Cypress.env('users').correct_user["username"], Cypress.env('users').correct_user["password"]);
    cy.loggingOut();
  })

})