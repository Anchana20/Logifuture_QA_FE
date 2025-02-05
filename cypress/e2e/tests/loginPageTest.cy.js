import { loginPage } from "../../support/pages/loginPage"
const loginPageObj = new loginPage()


describe(' test automation', () => {

    let testData;

    beforeEach(()=>{
    cy.fixture('loginData').then((data)=>{
    testData=data;
})
    })

    it.only('Login with valid credentials', () => {
        // cy.viewport('iphone-xr');
        cy.desktopLogin(Cypress.env('login').username, Cypress.env('login').password)
        cy.url().should('include','/account');
        loginPageObj.verifyLogoutButton();
    })

    it('Login with invalid username', () => {
        cy.login(Cypress.env('login').invalid_username, Cypress.env('login').password)
        cy.url().should('include','/login');
        loginPageObj.verifyWarningMessage().should('contain', Cypress.env('message').warningMessage)
    })

    it('Login with invalid password', () => {
        cy.login(Cypress.env('login').username, Cypress.env('login').invalid_password)
        cy.url().should('include','/login');
        loginPageObj.verifyWarningMessage().should('contain', Cypress.env('message').warningMessage)
    })

    it('POST Request - Login with POST API', () => {
        cy.request({
          method: 'POST',
          url: 'https://reqres.in/api/users',
          body: {
            "name": "Anchana",
            "job": "leader"
        }
        }).then((response) => {
            cy.log(`Response Body: ${JSON.stringify(response.body)}`);
            expect(response.status).to.eq(201);
           expect(response.body.name).to.eq("Anchana");
          });

        });
})