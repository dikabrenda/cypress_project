pipeline {

    agent any

    stages{
        stage('Build'){
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
                bat "npm run build --if-present"
                bat "npm run test"
            }
        }
        stage('Deploying'){
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