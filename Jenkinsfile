pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Install Frontend') {
            steps {
                script {
                    dir('tasknoter') {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Install Backend') {
            steps {
                script {
                    dir('notes-app-backend') {
                        sh 'npm install'
                    }
                }
            }
        }
        // Add additional stages as needed for build, test, or deploy
    }
    post {
        success {
            echo 'Build was successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
