pipeline {
    agent any

    tools {
        nodejs "Node16"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/J-S-Nafeez/Task-Noter.git'
            }
        }

        stage('Install Frontend') {
            steps {
                dir('Task_Noter') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Install Backend') {
            steps {
                dir('notes-app-backend') {
                    sh 'npm install'
                    sh 'node index.js &'
                }
            }
        }
    }
}
