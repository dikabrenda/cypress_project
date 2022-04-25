pipeline {

    agent any

    // parameters {
        // string(name: 'SPEC', defaultValue: "cypress/integration/*.test.js", description: "enter the script path")
        // choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "choose your browser")
    // }

    options {
        ansiColor('xterm')
    }

    stages{
        stage('SCM'){
            steps{
                echo "Building docker image"
                bat 'node --version'
            }
        }
        stage('Populate ENV'){
            steps{
                echo "Populate ENV"
                // bat "cp env//env.sample .env"
            }
        }
        stage('Testing'){
            steps{
                bat "docker-compose run chrome"
                // bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
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
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: false, 
                reportDir: 'cypress/reports/mochareport', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: ''
            ])
        }
    }
}