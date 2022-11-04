class LoginPage{

    navigate(){
        cy.visit("https://practicetestautomation.com/practice-test-login/")
    }

    senduserName(user_name){
        const username = cy.get('[id=username]')
        username.clear()
        username.type(user_name)
        return this
    }   

    sendPassword(pass){
        const password = cy.get('[id=password]')
        password.clear()
        password.type(pass)
        return this
    }

    submit(){
        cy.get('[id=submit]').click()
    }
}

export default LoginPage