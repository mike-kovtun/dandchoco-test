/// <reference types="cypress" />

const { has } = require("lodash");
const {
  PageElements
} = require("../support/selectors")
const pe = new PageElements()
Cypress.Screenshot.defaults({
  screenshotOnRunFailure: true
})

//
// --- Scenario comms

Cypress.Screenshot.defaults({
  disableTimersAndAnimations: false, screenshotOnRunFailure: true, overwrite: true, scale: true
})

Cypress.Commands.add('storePageVlidation_UI', () => {
  cy.elementIsVisible('div.site-header-sections.page-width')
  cy.elementIsVisible('div.hero__inner')
  cy.elementIsVisible('a.ajax-cart__toggle')
  cy.get('svg.icon-person').click();
})

Cypress.Commands.add('loginFormValidation_UI', () => {
  cy.get('svg.icon-person').click();
  cy.elementIsVisible('h1.customer-form__title')
  cy.elementIsVisible(pe.userNameField)
  cy.elementIsVisible(pe.passField)
  cy.elementIsVisible(pe.signInBtn)
  cy.elementIsVisible('a.customer-login__register')
  cy.elementIsVisible('a.customer-login__recover-password')
})

Cypress.Commands.add('loggingIn', (userName, passWord) => {
  cy.get(pe.userNameField).type(userName);
  cy.get(pe.passField).type(passWord);
  cy.get(pe.signInBtn).click();
})

Cypress.Commands.add('loggingOut', () => {
  cy.elementIsVisible('h1.section-header__title');
  cy.elementIsVisible('a.btn-link').eq(0)
  cy.get('a.btn-link').eq(1).click();
})

//
// --- New item adding
Cypress.Commands.add('addItemToCart', () => {
  cy.get('.ajax-cart__toggle').click();
  cy.verifyText('.cart-drawer__empty-text > p.text-center', 'Your cart is currently empty.');
  cy.get('button.cart-drawer__close-button').click();
  cy.goToPage('Shop');

  cy.get('button > span.primary-text > span.primary-text-large').contains('Add to Cart').then((elms) => {

    cy.get(elms).eq(getRandomInt(elms.length - 1)).trigger('mouseover', {
      force: true
    }).contains('Add to Cart').click({
      force: true
    })

  })

  cy.get('button.cart-drawer__checkout').click();
  cy.get('#checkout').click();

})

// --- Functions
// Choosing random element
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//
// --- Custom comms

Cypress.Commands.add('elementIsVisible', (element) => {
  cy.get(element).should('be.visible')
})

Cypress.Commands.add('elementExist', (element) => {
  cy.get(element).should('exist')
})

Cypress.Commands.add('verifyText', (element, text) => {
  cy.get(element).should('have.text', text)
})

let i = 0
Cypress.Commands.add('verifyAltTag', (element) => {
  cy.get(element).each(el => { i ++
    //cy.wrap(el).its('attr').should('have.text');
    cy.get(element).invoke('show').screenshot('img '+ i, {overwrite: false});
       if (el.has('attr', 'alt')) {
        cy.get(el).invoke('attr', 'alt').then((elms) => {
        if (elms.length < 1) {
        expect(elms).be.empty;
      } else if (elms.length > 1) {
        expect(elms).not.be.empty
      }
    })
    } else if (el.not.has('attr', 'alt')) {
      expect(el).not.has('attr', 'alt')
    }
    });
    
  });
  
//})




Cypress.Commands.add('goToPage', (root) => {

  cy.get('div.site-header__toolbar__main').then(() => {

    switch (root) {

      case 'Shop':
        cy.get('div.site-header__toolbar__main >').eq(0).click()
        break

      case 'Experiences':
        cy.get('div.site-header__toolbar__main >').eq(1).click()
        break

      case 'Locations':
        cy.get('div.site-header__toolbar__main >').eq(2).click()
        break

      case 'Origins':
        cy.get('div.site-header__toolbar__main >').eq(3).click()
        break

      case 'Corporate':
        cy.get('div.site-header__toolbar__main >').eq(4).click()
        break

      case 'About':
        cy.get('div.site-header__toolbar__main >').eq(5).click()
        break

      default:
        break

    }

  })
})