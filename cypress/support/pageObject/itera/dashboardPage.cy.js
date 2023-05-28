class dashboardPage{
    // button
    loginMenu = '.form-inline > .navbar-nav > :nth-child(2) > .nav-link'
    createBtn = ':nth-child(4) > .btn'
    editBtn = ':nth-child(2) > :nth-child(7) > .btn-outline-primary'
    detailsBtn = ':nth-child(2) > :nth-child(7) > .btn-outline-info'
    deleteBtn = ':nth-child(2) > :nth-child(7) > .btn-outline-danger'
    deleteSubmitBtn = '.btn-outline-danger'
    submitBtn = '.col-md-offset-2 > .btn'
    searchBtn = '.container > div > form > .btn'

    // url
    searchingURL = '/Dashboard?searching='
    dashboardURL = '/Dashboard'

    // field
    name = '#Name'
    company = '#Company'
    address = '#Address'
    city = '#City'
    phone = '#Phone'
    email = '#Email'  
    search = '#searching'

    // table
    nameTable = 'tbody > :nth-child(2) > :nth-child(1)'
    companyTable = 'tbody > :nth-child(2) > :nth-child(2)'
    addressTable = 'tbody > :nth-child(2) > :nth-child(3)'
    cityTable = 'tbody > :nth-child(2) > :nth-child(4)'
    phoneTable = 'tbody > :nth-child(2) > :nth-child(5)'
    emailTable = ':nth-child(2) > :nth-child(6)'

    inputName(name){
        cy.input(this.name, name)
    }

    inputCompany(company){
        cy.input(this.company, company)
    }

    inputAddress(address){
        cy.input(this.address, address)
    }

    inputCity(city){
        cy.input(this.city, city)
    }

    inputPhone(phone){
        cy.input(this.phone, phone)
    }

    inputEmail(email){
        cy.input(this.email, email)
    }

    inputSearch(search){
        cy.input(this.search, search)
    }
}

export default dashboardPage