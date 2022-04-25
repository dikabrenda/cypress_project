FROM cypress/included:9.5.4

RUN mkdir /cypress-project
WORKDIR /cypress-project

COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

RUN npm install
ENTRYPOINT [ "npm", "run" ]