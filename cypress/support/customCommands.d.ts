declare namespace Cypress {
    interface Chainable<Subject> {

      storePageVlidation_UI(element: any): Chainable<any>
      loginFormValidation_UI(element: any): Chainable<any>
      homePageValidation_UI(element: any): Chainable<any>

      loggingIn(username: any, password: any): Chainable<any>
      loggingOut(element: any): Chainable<any>
      addItemToCart(element: any): Chainable<any>

      verifyAlttag(element: any): Chainable<any>  
      elementIsVisible(element: any): Chainable<any>  
      elementExist(element: any): Chainable<any> 
      verifyText(element: any, text: any): Chainable<any> 
      goToPage(element: any): Chainable<any>
      getRandomInt(element: any): Chainable<any>
              
  }
}