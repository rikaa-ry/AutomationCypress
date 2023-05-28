import dashboardPage from "../../support/pageObject/itera/dashboardPage.cy.js"
const generalInputData = require("../../fixtures/itera/general.json")
const dashboardInputData = require("../../fixtures/itera/dashboard.json")

describe('Verify Dashboard Scenario', () => {

  // Inisialisasi Page
  const Dashboard = new dashboardPage()

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
  it('Success Create New Customer', () => {
    cy.get(Dashboard.createBtn).click()
    Dashboard.inputName(dashboardInputData.nameCreate)
    Dashboard.inputCompany(dashboardInputData.companyCreate)
    Dashboard.inputAddress(dashboardInputData.addressCreate)
    Dashboard.inputCity(dashboardInputData.cityCreate)
    Dashboard.inputPhone(dashboardInputData.phoneCreate)
    Dashboard.inputEmail(dashboardInputData.emailCreate)
    cy.get(Dashboard.submitBtn).click()

    // assertions
    Dashboard.inputSearch(dashboardInputData.nameCreate)
    cy.get(Dashboard.searchBtn).click()
    cy.url().should('include', Dashboard.searchingURL + dashboardInputData.nameCreate)
    cy.get(Dashboard.nameTable).should('contain.text', dashboardInputData.nameCreate)
    cy.get(Dashboard.companyTable).should('contain.text', dashboardInputData.companyCreate)
    cy.get(Dashboard.addressTable).should('contain.text', dashboardInputData.addressCreate)
    cy.get(Dashboard.cityTable).should('contain.text', dashboardInputData.cityCreate)
    cy.get(Dashboard.phoneTable).should('contain.text', dashboardInputData.phoneCreate)
    cy.get(Dashboard.emailTable).should('contain.text', dashboardInputData.emailCreate)
  })

  // Positive Case
  it('Success View Details Customer', () => {
    Dashboard.inputSearch(dashboardInputData.nameCreate)
    cy.get(Dashboard.searchBtn).click()
    cy.get(Dashboard.detailsBtn).click()

    // assertions
    cy.url().should('contain', Dashboard.detailsURL)
    cy.get(Dashboard.nameDetails).should('contain.text', dashboardInputData.nameCreate)
    cy.get(Dashboard.companyDetails).should('contain.text', dashboardInputData.companyCreate)
    cy.get(Dashboard.addressDetails).should('contain.text', dashboardInputData.addressCreate)
    cy.get(Dashboard.cityDetails).should('contain.text', dashboardInputData.cityCreate)
    cy.get(Dashboard.phoneDetails).should('contain.text', dashboardInputData.phoneCreate)
    cy.get(Dashboard.emailDetails).should('contain.text', dashboardInputData.emailCreate)
  })

  // Positive Case
  it('Success Edit Data Customer', () => {
    Dashboard.inputSearch(dashboardInputData.nameCreate)
    cy.get(Dashboard.searchBtn).click()
    cy.get(Dashboard.editBtn).click()
    cy.get('[type="text"]').invoke('val', '')
    Dashboard.inputName(dashboardInputData.nameEdit)
    Dashboard.inputCompany(dashboardInputData.companyEdit)
    Dashboard.inputAddress(dashboardInputData.addressEdit)
    Dashboard.inputCity(dashboardInputData.cityEdit)
    Dashboard.inputPhone(dashboardInputData.phoneEdit)
    Dashboard.inputEmail(dashboardInputData.emailEdit)
    cy.get(Dashboard.submitBtn).click()

    // assertions
    Dashboard.inputSearch(dashboardInputData.nameEdit)
    cy.get(Dashboard.searchBtn).click()
    cy.get(Dashboard.nameTable).should('contain.text', dashboardInputData.nameEdit)
    cy.get(Dashboard.companyTable).should('contain.text', dashboardInputData.companyEdit)
    cy.get(Dashboard.addressTable).should('contain.text', dashboardInputData.addressEdit)
    cy.get(Dashboard.cityTable).should('contain.text', dashboardInputData.cityEdit)
    cy.get(Dashboard.phoneTable).should('contain.text', dashboardInputData.phoneEdit)
    cy.get(Dashboard.emailTable).should('contain.text', dashboardInputData.emailEdit)
  })

  // Positive Case
  it('Success Delete Data Customer', () => {
    Dashboard.inputSearch(dashboardInputData.nameEdit)
    cy.get(Dashboard.searchBtn).click()
    cy.get(Dashboard.deleteBtn).click()
    cy.get(Dashboard.deleteSubmitBtn).click()

    // assertions
    cy.url().should('include', Dashboard.dashboardURL)
    Dashboard.inputSearch(dashboardInputData.nameEdit)
    cy.get(Dashboard.searchBtn).click()
    cy.get('td').should('contain.text', 'No Match')
  })
})