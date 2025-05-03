pipeline {
    agent any
    tools {
        nodejs 'node-23.11.0'  // Reference the exact name you gave when configuring Node.js in the Global Tool Configuration
    }
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
                        sh 'npm install'  // Install dependencies for the frontend
                    }
                }
            }
        }
        stage('Install Backend') {
            steps {
                script {
                    dir('notes-app-backend') {
                        sh 'npm install'  // Install dependencies for the backend
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
