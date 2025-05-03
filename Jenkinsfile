pipeline {
    agent any
    tools {
        nodejs 'node-23.11.0'  // Reference the configured Node.js version
    }
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm  // Checkout the code from your Git repository
            }
        }
        stage('Install Frontend') {
            steps {
                script {
                    dir('tasknoter') {
                        sh 'npm install'  // Install frontend dependencies
                    }
                }
            }
        }
        stage('Install Backend') {
            steps {
                script {
                    dir('notes-app-backend') {
                        sh 'npm install'  // Install backend dependencies
                    }
                }
            }
        }
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
