/// <reference types='cypress' />

import element from "../support/elemets/login.element"

class loginPage {


    static openBrowser() {
        cy.visit('/')
    }

    static setUsername(username) {
        element.USERNAME_TEXT_BOX()
            .clear()
            .type(`${username}`)
            .should('have.value', `${username}`)
    };

    static setPassword(pwsd) {
        element.PASSWORD_TEXT_BOX()
            .clear()
            .type(`${pwsd}`)
            .should('have.value', `${pwsd}`)
    };

    static clickLogin() {
        element.LOGIN_BUTTON()
            .click()
    }

    static wordingMessage() {
        element.ERROR_MESSAGE_TEXT()
            .invoke('text')
            .then((message) => {
                expect(message).to.eql('credentials')
            })
    }
}

export default loginPage