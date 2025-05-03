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
                    // Use shell commands to install Node.js if not installed
                    sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Install Backend') {
            steps {
                dir('notes-app-backend') {
                    sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'
                    sh 'npm install'
                    // Optional: Add test script here if available
                    // sh 'npm test'
                }
            }
        }
    }
}
