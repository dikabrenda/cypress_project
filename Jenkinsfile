pipeline {

    agent any

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
                bat "npm cypress run --headless --browser chrome"
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