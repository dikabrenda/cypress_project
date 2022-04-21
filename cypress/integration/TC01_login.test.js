import loginPage from "../pages/login.page";
import login_data from "../fixtures/login.data";


describe('as a user, i want to login successfully', () => {

    login_data.forEach(data => {
        describe(data.name, () => {
            it('user filled in username', () => {
                loginPage.setUsername(data.username)
            })
            it('user filled in password', () => {
                loginPage.setPassword(data.password)
            })

            it('user tap login button', () => {
                loginPage.clickLogin()
            })
        })
    })
})