pipeline {
    agent {
        docker {
            image 'node:18-alpine' // You can change to any compatible Node version
        }
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/J-S-Nafeez/Task-Noter.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests... (add test command if available)'
                // You can add: sh 'npm test'
            }
        }
    }
}
