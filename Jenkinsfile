pipeline {

    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/integration/*.test.js", description: "enter the script path")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "choose your browser")
    }

    options {
        ansiColor('xterm')
    }

    stages{
        stage('SCM'){
            steps{
                echo "Building the application"
            }
        }
        stage('Populate ENV'){
            steps{
                echo "Populate ENV"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Stash Report'){
            steps{
                echo "Deploy the application"
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/mochareport', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}