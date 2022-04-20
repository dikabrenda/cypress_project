const element = {
 
    USERNAME_TEXT_BOX: () => {
        return cy.get('#txtUsername')
    },

    PASSWORD_TEXT_BOX: () => {
        return cy.get('#txtPassword')
    },

    LOGIN_BUTTON: () => {
        return cy.get('#btnLogin')
    },

    ERROR_MESSAGE_TEXT: () => {
        return cy.get('#spanMessage')
    }
}

export default element