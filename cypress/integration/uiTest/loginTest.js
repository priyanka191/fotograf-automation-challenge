/// <reference types="Cypress" />
import LoginPage from "../../support/pages/LoginPage"
import CustomerInformationPage from "../../support/pages/CustomerInformationPage"

describe("Customer login with access code", function () {
  const loginPage = new LoginPage()
  const customerInformationPage = new CustomerInformationPage()

  beforeEach(function () {
    cy.fixture("userData").then(function (data) {
      this.data = data
    })
  })

  it("Open URL page and verify the login page", function () { 
    cy.visit('/prepay/login')
    //check the login button
    loginPage.getLoginButton().should('be.visible').and('contain', 'Login')
    cy.url().should("have.contain","login")
  })

  it("Enter invalid access code and click on login button", function () {
    //Enter invalid access code
    loginPage.getAccessCode().type(this.data.invalidAccessCode)
    //Click on login button
    loginPage.getLoginButton().click()
  })

  it("Verify the error message for invalid access code", function () {
    //Verif the alert message
    loginPage.getAlertMessage().should('have.include.text', 'Code not found')
    //Verify the login page url
    cy.url().should ("include","login")  
  })

  it("Enter valid access code and click on login button", function () {
    //Clear the access code field
    loginPage.getAccessCode().clear()
    //Enter valid access code
    loginPage.getAccessCode().type(this.data.accessCode)
    //Click on login button
    loginPage.getLoginButton().click()
  })

  it("Verify customer personal info page open successfully", function () {
    //Verify the customer page URL and title
    cy.url().should("include","customer")
    cy.title().should('include', 'Prepay | GotPhoto')
    //Verify the customer info page field
    customerInformationPage.getFirstName().should('be.visible')
  })
})
