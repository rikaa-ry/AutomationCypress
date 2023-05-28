import generalPage from "../../support/pageObject/itera/generalPage.cy.js"
import registerPage from "../../support/pageObject/itera/registerPage.cy.js"
const generalInputData = require("../../fixtures/itera/general.json")
const registerInputData = require("../../fixtures/itera/register.json")

describe('Verify Registration Scenario', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  // Inisialisasi Page
  const General = new generalPage()
  const Register = new registerPage()

  // Positive Case
  it('Success Register Input All Fields', () => {
    // Deklarasi random integer (3 digit)
    var random = Math.floor(Math.random() * 1001)

    cy.get(Register.registerMenu).click()
    Register.inputFirstName(registerInputData.firstName)
    Register.inputSurname(registerInputData.surname)
    Register.inputEpost(registerInputData.ePost)
    Register.inputMobile(registerInputData.mobile)
    General.inputUsername('rika' + random)
    General.inputPassword(generalInputData.password)
    Register.inputConfirmPassword(registerInputData.confirmPassword)
    cy.get(Register.registerBtn).click()

    // assertion
    cy.get(Register.successMessage).should('contain.text', 'Registration Successful')
  })

  // Positive Case (input required field without epost and mobile)
  it('Success Register Input Required Fields', () => {
    // Deklarasi random integer (3 digit)
    var random = Math.floor(Math.random() * 1001)

    cy.get(Register.registerMenu).click()
    Register.inputFirstName(registerInputData.firstName)
    Register.inputSurname(registerInputData.surname)
    General.inputUsername('rika' + random)
    General.inputPassword(generalInputData.password)
    Register.inputConfirmPassword(registerInputData.confirmPassword)
    cy.get(Register.registerBtn).click()

    // assertion
    cy.get(Register.successMessage).should('contain.text', 'Registration Successful')
  })

  // Negative Case
  it('Failed Register Empty Required Fields', () => {
    cy.get(Register.registerMenu).click()
    cy.get(Register.registerBtn).click()

    // assertions
    cy.get(Register.firstNameRequired).should('contain.text', 'Please enter first name')
    cy.get(Register.surnameRequired).should('contain.text', 'Please enter surname')
    cy.get(Register.usernameRequired).should('contain.text', 'Please enter username')
    cy.get(Register.passwordRequired).should('contain.text', 'Please enter password')
  })

  // Negative Case
  it('Failed Register Wrong Confirm Password Field', () => {
    cy.get(Register.registerMenu).click()
    Register.inputFirstName(registerInputData.firstName)
    Register.inputSurname(registerInputData.surname)
    General.inputUsername(generalInputData.usernameExisted)
    General.inputPassword(generalInputData.password)
    Register.inputConfirmPassword(generalInputData.passwordWrong)
    cy.get(Register.registerBtn).click()

    // assertion
    cy.get(Register.confirmPasswordError).should('contain.text', "'Confirm password' and 'Password' do not match.")
  })

  // Negative Case
  it('Failed Register using Existing Username', () => {
    cy.get(Register.registerMenu).click()
    Register.inputFirstName(registerInputData.firstName)
    Register.inputSurname(registerInputData.surname)
    Register.inputEpost(registerInputData.ePost)
    Register.inputMobile(registerInputData.mobile)
    General.inputUsername(generalInputData.usernameExisted)
    General.inputPassword(generalInputData.password)
    Register.inputConfirmPassword(registerInputData.confirmPassword)
    cy.get(Register.registerBtn).click()

    // assertion
    cy.get(Register.errorMessage).should('contain.text', 'Username already exist')
  })
})