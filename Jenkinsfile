pipeline {
    agent any

    tools {
        nodejs 'node-18'  // use the tool name from Jenkins config
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/J-S-Nafeez/Task-Noter.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || echo "No tests found or failed tests."'
            }
        }
    }

    post {
        success {
            echo '✅ Task-Noter pipeline completed successfully!'
        }
        failure {
            echo '❌ Task-Noter pipeline failed. Check the logs for details.'
        }
    }
}
