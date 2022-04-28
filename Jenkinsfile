pipeline {

    agent any

    options {
        ansiColor('xterm')
    }

    stages{
        stage('SCM'){
            steps{
                bat "docker build -t dikabrenda/cypress_project:v1 -f Dockerfile ."
            }
        }
        stage('Populate ENV'){
            steps{
                echo "populate env"
            }
        }
        stage('Testing'){
            steps{
                bat "docker-compose run chrome"
            }
        }
        stage('Stash Report'){
            steps{
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
        }
    }

    post{
        always{
            bat "docker-compose down"
        }
    }
}