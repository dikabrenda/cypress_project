
// Enable support for xpath
import 'cypress-xpath'

Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false
});

import addContext from 'mochawesome/addContext'

Cypress.on("test:after:run", (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`
    addContext({ test }, screenshot)
  }
});

import dotenv, {config} from "dotenv"
import loginPage from '../pages/login.page';
dotenv.config()

// before(() => {
  // console.log("Navigate Browser");
  // loginPage.openBrowser()
// })

// beforeEach(() => {
  // console.log("Login");
// })
// 
// afterEach(() => {
  // console.log("Logout");
// })

// after(() => {
  // console.log("Close Browser");
// })


export default (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config.env.credentials = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  }
  return config
}