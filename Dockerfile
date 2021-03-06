FROM cypress/included:9.5.4

LABEL maintainer="Dika Brenda Angkasa <dikaabrenda@gmail.com>"
RUN mkdir /cypress-project

WORKDIR /cypress-project

COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

EXPOSE 80
RUN npm cache clean --force \
    && npm update \
    && npm install --unsafe-perm=true --allow-root cypress

ENTRYPOINT [ "npm", "run" ]