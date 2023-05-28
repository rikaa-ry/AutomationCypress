class loginPage{
    // button
    loginMenu = '.form-inline > .navbar-nav > :nth-child(2) > .nav-link'
    loginBtn = '.btn-primary'

    // url
    loginURLSuccess = "/Dashboard"

    // message
    welcomeMessage = 'h3'
    errorMessage = '.alert-danger'
    usernameRequired = '.field-validation-error'
    passwordRequired = ':nth-child(6) > td > .field-validation-error'
}

export default loginPage