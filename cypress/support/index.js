import 'cypress-xpath'

Cypress.on('uncaught:exception', (_err, _runnable) => {
  return false
});

import addContext from 'mochawesome/addContext'

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, screenshot);
  }
});

import dotenv, {config} from "dotenv"
dotenv.config()