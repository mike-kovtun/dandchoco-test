/// <reference types="cypress"/>

import {
  PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Alt tags verification', () => {
  beforeEach(() => {
    cy.visit('/')
  Cypress.on('uncaught:exception', (err, runnable) => {
     return false
  })
  cy.clearLocalStorage()
})


  it('Store page validation', () => {
    cy.elementIsVisible('div.site-header-sections.page-width')
    cy.verifyAltTag('img.card__image');
    //cy.screenshot('Store page',{capture: 'fullPage'});
  })

  it('Experiences page validation', () => {
    cy.goToPage('Experiences');
    cy.verifyAltTag('img.shogun-image')
  }) 

  it('Locations page validation', () => {
    cy.goToPage('Locations');
    cy.verifyAltTag('img.shogun-image');
    //cy.screenshot('Locations page',{capture: 'fullPage'});
  }) 
  
  it('Origins page validation', () => {
    cy.goToPage('Origins');
    cy.verifyAltTag('img.shogun-image');
    //cy.screenshot('Origins page',{capture: 'fullPage'});
  })   
})