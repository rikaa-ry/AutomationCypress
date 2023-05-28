import generalPage from "../../support/pageObject/itera/generalPage.cy.js"
import loginPage from "../../support/pageObject/itera/loginPage.cy.js"
const generalInputData = require("../../fixtures/itera/general.json")

describe('Verify Login Scenario', () => {

  beforeEach(() => {
    cy.visit('/')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
  })

  // Inisialisasi Page
  const General = new generalPage()
  const Login = new loginPage()

  // Positive Case
  it('Success Login', () => {
    cy.get(Login.loginMenu).click()
    General.inputUsername(generalInputData.usernameExisted)
    General.inputPassword(generalInputData.password)
    cy.get(Login.loginBtn).click()

    // assertions
    cy.url().should('include', Login.loginURLSuccess)
    cy.get(Login.welcomeMessage).should('contain.text', generalInputData.usernameExisted)
  })

  // Negative Case
  it('Failed Login Empty Required Fields', () => {
    cy.get(Login.loginMenu).click()
    cy.get(Login.loginBtn).click()

    // assertions
    cy.get(Login.errorMessage).should('contain.text', 'Wrong username or password')
    cy.get(Login.usernameRequired).should('contain.text', 'Please enter username')
    cy.get(Login.passwordRequired).should('contain.text', 'Please enter password')
  })

  // Negative Case
  it('Failed Login Wrong Username', () => {
    cy.get(Login.loginMenu).click()
    General.inputUsername(generalInputData.usernameWrong)
    General.inputPassword(generalInputData.password)
    cy.get(Login.loginBtn).click()

    // assertion
    cy.get(Login.errorMessage).should('contain.text', 'Wrong username or password')
  })

  // Negative Case
  it('Failed Login Wrong Password', () => {
    cy.get(Login.loginMenu).click()
    General.inputUsername(generalInputData.usernameExisted)
    General.inputPassword(generalInputData.passwordWrong)
    cy.get(Login.loginBtn).click()

    // assertion
    cy.get(Login.errorMessage).should('contain.text', 'Wrong username or password')
  })

  // Additional Test
  it('Clear Field', () => {
    cy.get(Login.loginMenu).click()
    General.inputUsername(generalInputData.usernameExisted)
    General.inputPassword(generalInputData.password)
    cy.get(':nth-child(7) > :nth-child(2) > .btn-secondary').click()

    // assertions
    cy.get(General.username).should('have.value', '')
    cy.get(General.password).should('have.value', '')
  })

  // Additional Test
  it('Link to Register Page', () => {
    cy.get(Login.loginMenu).click()
    cy.get('.btn > a').click()

    // assertion
    cy.url().should('include', "/UserRegister/NewUser")
  })
})