import * as loginLocator from "../Locators/loginLocators"
export class loginPage {
    // searchProduct(productName) {

    //     cy.get(loginLocator.search_input).type(productName)
    //     cy.get(loginLocator.click_search).click()
    // }
    // addToCart() {

    //     cy.contains(loginLocator.addtocart).first().click()
    // }

    // verifySucessMessage() {
    //     return cy.get(loginLocator.successMessages)
    // }

    verifyWarningMessage(){
        return cy.get(loginLocator.warningMessage)
    }

    verifyLogoutButton(){
        cy.get(loginLocator.logOutButton).last().then((text)=>{
          cy.wrap(text.text());
        }).should('eq','Logout');
    }
}