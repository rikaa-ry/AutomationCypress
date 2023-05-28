class registerPage{
    // button
    registerMenu = '.form-inline > .navbar-nav > :nth-child(1) > .nav-link'
    registerBtn = '#submit'

    // field
    firstName = '#FirstName'
    surname = '#Surname'
    ePost = '#E_post'
    mobile = '#Mobile'
    confirmPassword = '#ConfirmPassword'

    // message
    successMessage = '.label-success'
    errorMessage = '.label-danger'
    firstNameRequired = '#FirstName-error'
    surnameRequired = '#Surname-error'
    usernameRequired = '#Username-error'
    passwordRequired = '#Password-error'
    confirmPasswordError = '#ConfirmPassword-error'

    inputFirstName(first_name){
        cy.input(this.firstName, first_name)
    }

    inputSurname(surname){
        cy.input(this.surname, surname)
    }

    inputEpost(e_post){
        cy.input(this.ePost, e_post)
    }

    inputMobile(mobile){
        cy.input(this.mobile, mobile)
    }

    inputConfirmPassword(confirm_password){
        cy.input(this.confirmPassword, confirm_password)
    }
}

export default registerPage