def buildApp(){
    echo "${BRANCH}"
    bat "docker build -t dikabrenda/cypress_project:v1 -f Dockerfile ."
}

def populateEnv(){
    echo 'populate env'
}

def dockerCompose(){
    bat "docker-compose run chrome"
}

def publishReport(){
    publishHTML ([
    allowMissing: false, 
    alwaysLinkToLastBuild: false, 
    keepAll: false, 
    reportDir: 'cypress/reports/mochareport', 
    reportFiles: 'index.html', 
    reportName: 'HTML Report', 
    reportTitles: ''
    ])
}

return this