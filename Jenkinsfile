pipeline {

    agent any
    
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
                bat "npm run test:headless"
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
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true])
        }
    }
}