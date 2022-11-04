import LoginPage from "../PageObjects/Login";

describe('Practice Test Automation Login Page', () => {
    const lp = new LoginPage()

    it('Login functions', () => {
        lp.navigate()
        lp.senduserName('student')
        lp.sendPassword('Password123')
        lp.submit()    
    });

    it('Login Successful URL Assertion', () => {
        cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/')
    })
});