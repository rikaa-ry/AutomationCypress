import loginPage from "../../support/pageObject/itera/loginPage.cy.js"
const generalInputData = require("../../fixtures/itera/general.json")

describe('Verify Login Scenario', () => {

  // Inisialisasi Page
  const Login = new loginPage()

  beforeEach(() => {
    cy.visit('/')
    cy.login(generalInputData.usernameExisted, generalInputData.password)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  })

  // Positive Case
  it('Success Logout', () => {
    cy.get(Login.loginMenu).click()

    // assertion
    cy.url().should('include', '/Login')
  })
})