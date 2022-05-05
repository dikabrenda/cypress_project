def buildApp(){
    bat "docker run -p 3000:3000 dikabrenda/cypress_project:v3 ."
    // bat "docker build -t dikabrenda/cypress_project:v3 ."
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