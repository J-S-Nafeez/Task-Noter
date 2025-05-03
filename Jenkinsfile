pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/J-S-Nafeez/Task-Noter.git'
            }
        }

        stage('Install Frontend') {
            steps {
                dir('Task-Noter') {
                    // Ensure Node.js is available before running npm commands
                    sh 'which node || echo "Node.js not found. Please install it."'
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Install Backend') {
            steps {
                dir('notes-app-backend') {
                    // Ensure Node.js is available before running npm commands
                    sh 'which node || echo "Node.js not found. Please install it."'
                    sh 'npm install'
                    // Optional: Add test script here if available
                    // sh 'npm test'
                }
            }
        }
    }
}
