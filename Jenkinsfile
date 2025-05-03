pipeline {
    agent any
    tools {
        nodejs 'node-23.11.0'
    }
    stages {
        stage('Verify Node.js Installation') {
            steps {
                sh 'node -v'  // Verify that the correct Node.js version is available
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
}
