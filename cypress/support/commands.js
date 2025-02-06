// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import * as loginLocator from "../support/Locators/loginLocators";
Cypress.Commands.add('login', (email, password) => {
    cy.visit(Cypress.env('url'))
    cy.get(loginLocator.email).type(email);
    cy.get(loginLocator.password).type(password);
    cy.get(loginLocator.loginButton).click();
})

// Cypress.Commands.add('mobileLogin', (email, password) => {
//     cy.viewport('iphone-xr');
//     cy.visit(Cypress.env('url'))
//     cy.get(loginLocator.email).type(email);
//     cy.get(loginLocator.password).type(password);
//     cy.get(loginLocator.loginButton).click();
// })