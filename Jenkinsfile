def gv

pipeline {
    agent any
    // environment {
        // BRANCH = 'master'
        // CHANGES = true
    // }
    options {
        ansiColor('xterm')
    }

    stages{
        // stage('Initial'){
            // steps{
                // script {
                    // gv = load "jenkins/script.groovy"
                // }
            // }
        // }
        stage('SCM'){
            // when {
                // expression {
                    // BRANCH_NAME == "${BRANCH}" && CODE_CHANGES == "${CHANGES}"
                // }
            // }
            steps{
                script {
                    gv = load "jenkins/script.groovy"
                    gv.buildApp()
                }
            }
        }
        stage('Populate ENV'){
            steps{
                script {
                    gv.populateEnv()
                }
            }
        }
        stage('Testing'){
            // when {
                // expression {
                    // BRANCH_NAME == "${BRANCH}"
                // }
            // }
            steps{
                script {
                    gv.dockerCompose()
                }
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