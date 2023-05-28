class generalPage{
    // field
    username = '#Username'
    password = '#Password'

    inputUsername(username){
        cy.input(this.username, username)
    }

    inputPassword(password){
        cy.input(this.password, password)
    }
}

export default generalPage