class CustomerInformationPage {
  getFirstName() {
    return cy.get('#firstname')
  }
  getLastName() {
    return cy.get('#lastname')
  }
  getEmail() {
    return cy.get('#email')
  }
  getLoginButton() {
    return cy.get('[type="submit"]')
  }
}

export default CustomerInformationPage
