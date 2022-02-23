class ChildInformationPage {
  getChildFirstName() {
    return cy.get('#firstname')
  }
  getChildLastName() {
    return cy.get('#lastname')
  }
  getTeacher() {
    return cy.get('#teacher')
  }
  getGroup() {
    return cy.get('#group')
  }
  getAddChildButton() {
    return cy.get('[type="submit"]')
  }
  getConfirmAndShopProducts() {
    return cy.get('.ant-btn-primary')
  }
  getPopUp() {
    return cy.get('.confirm-student-drawer_ChildList_CardBody__3dwo1')
  } 
}

export default ChildInformationPage
