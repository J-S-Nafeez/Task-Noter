pipeline {
    agent any

    tools {
        nodejs "Node16" // Make sure this is installed and configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/J-S-Nafeez/Task-Noter.git'
            }
        }

        stage('Install Frontend') {
            steps {
                dir('Task-Noter') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Install Backend') {
            steps {
                dir('notes-app-backend') {
                    sh 'npm install'
                    // Optional: Add test script here if available
                    // sh 'npm test'
                }
            }
        }
    }
}
