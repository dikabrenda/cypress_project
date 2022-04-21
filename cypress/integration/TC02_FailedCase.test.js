import loginPage from "../pages/login.page";

describe('this for scenario failed case and uploaded image', () =>{

    describe('Wording Message Invalid Login', () => {
        it('user filled in username', () => {
            loginPage.setUsername('Admin')
        })
        it('user filled in wrong password', () => {
            loginPage.setPassword('!@£!$@£')
        })
        it('user tap login button', () => {
            loginPage.clickLogin()
        })
        it('user verify a wording message', () => {
            loginPage.wordingMessage()
        })
    })
})