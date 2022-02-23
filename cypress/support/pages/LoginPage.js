class LoginPage {
    getAccessCode() {
        return cy.get('#accessCode')
    }
    getLoginButton() {
        return cy.get('[type="submit"]')
    }
    getAlertMessage() {
        return cy.get('.ant-alert-message')
    }  
}

export default LoginPage