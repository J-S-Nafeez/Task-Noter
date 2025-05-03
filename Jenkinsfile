pipeline {
    agent any

    environment {
        // Set Node.js version if needed
        NODE_HOME = '/usr/local/bin/node' // Path to your Node.js installation, change accordingly if needed
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    // Check if Git is installed, otherwise fall back to installing it
                    if (!sh(script: 'which git', returnStatus: true)) {
                        sh 'sudo apt-get update && sudo apt-get install -y git'
                    }
                }
                git 'https://github.com/J-S-Nafeez/Task-Noter.git'
            }
        }

        stage('Install Frontend') {
            steps {
                script {
                    // Ensure Node.js 16.x is installed (if not, it will install it)
                    if (!sh(script: 'which node', returnStatus: true)) {
                        sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
                        sh 'sudo apt-get install -y nodejs'
                    }
                }
                dir('Task-Noter') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Install Backend') {
            steps {
                script {
                    // Ensure Node.js 16.x is installed for the backend as well
                    if (!sh(script: 'which node', returnStatus: true)) {
                        sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
                        sh 'sudo apt-get install -y nodejs'
                    }
                }
                dir('notes-app-backend') {
                    sh 'npm install'
                    // Optional: Add test script here if available
                    // sh 'npm test'
                }
            }
        }
    }
}
