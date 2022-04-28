import loginPage from "../pages/login.page";

describe('this for scenario failed case and uploaded image', () =>{

    it('User Login using Invalid Password', () => {
        loginPage.setUsername('Admin')
        loginPage.setPassword('!@£!$@£')
        loginPage.clickLogin()
        loginPage.wordingMessage()
    })
})