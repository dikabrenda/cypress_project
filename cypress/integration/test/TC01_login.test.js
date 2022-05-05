import loginPage from "../../pages/login.page";
import login_data from "../../fixtures/login.data";

describe('as a user, i want to login successfully', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    
    login_data.forEach(data => {
        it(data.name, () => {
            loginPage.setUsername(data.username)
            loginPage.setPassword(data.password)
            loginPage.clickLogin()
        })
    })
})