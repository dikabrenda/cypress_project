pipeline {

    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/integration/*.test.js", description: "Enter the script path")
        choice(name: 'BROWSER', ['chrome', 'edge', 'firefox'], description: "Choise your browser")
    }

    options{
        ansiColor('xterm')
    }

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
            bat "npm cypress run --headless --browser ${BROWSER} --spec ${SPEC}"
        }
    }
    stage('Deploying'){
        step{
            echo "Deploy the application"
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true])
        }
    }
}