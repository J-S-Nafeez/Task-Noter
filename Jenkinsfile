pipeline {
    agent any

    stages {
        stage('Check Node.js') {
            steps {
                script {
                    def nodeExists = sh(script: 'which node', returnStatus: true)
                    if (nodeExists != 0) {
                        error "Node.js is not installed. Please install it on the Jenkins server."
                    }
                }
            }
        }

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
                }
            }
        }
    }
}
