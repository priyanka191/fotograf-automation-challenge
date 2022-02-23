/// <reference types="Cypress" />
import LoginPage from "../../support/pages/LoginPage"
import CustomerInformationPage from "../../support/pages/CustomerInformationPage"
import ChildInformationPage from "../../support/pages/ChildInformationPage"
import ProductsPage from "../../support/pages/ProductsPage"

describe('Customer login, add info and verify the product page', function () {
    const login = new LoginPage()
    const customerInformationPage = new CustomerInformationPage()
    const childInformationPage = new ChildInformationPage()
    const productsPage = new ProductsPage()

    beforeEach(function () {
        cy.fixture('userData').then(function (data) {
            this.data = data
        })
    })

    it("Login with valid access code", function () {
        cy.visit('/prepay/login')
        //Enter the access code
        login.getAccessCode().type(this.data.accessCode)
        //Click on login button
        login.getLoginButton().click()
        //Verify the customer info page
        cy.url().should("include", "customer")
    })

    it("Enter parent's info, click on login and verify child info page open successfully", function () {
        //Fill all mandatory field on parent's add page.
        customerInformationPage.getFirstName().type(this.data.parentFirstName)
        customerInformationPage.getLastName().type(this.data.parentLastName)
        customerInformationPage.getEmail().type(this.data.email)
        //Click on the login button.
        customerInformationPage.getLoginButton().click()
        //Verify the child info page
        cy.url().should("include", "students")
    })

    it("Enter child's info on add child page and click confirm to shop button", function () {
        //Fill all mandatory field on child's add page.
        childInformationPage.getChildFirstName().type(this.data.childFirstName)
        childInformationPage.getChildLastName().type(this.data.ChildLatName)
        childInformationPage.getTeacher().type(this.data.teacher)
        childInformationPage.getGroup().type(this.data.group)
        //Click on add child button.
        childInformationPage.getAddChildButton().click()
        //Click on the pop up
        childInformationPage.getPopUp().click()
        //Click on confirm and shop products button.
        childInformationPage.getConfirmAndShopProducts().click()
    })

    it("Verify product's header page", function () {
        //Verify product's header text
        productsPage.getProductHeader().should('have.contain.text', "Photo Event 2021")
        //Verify the product page 
        cy.url().should("include", "job")
    })
})
