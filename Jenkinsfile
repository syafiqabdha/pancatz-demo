pipeline {
    agent any
    
    // We removed the 'tools' block to avoid the error
    
    stages {
        stage('Check Environment') {
            steps {
                // This checks if node is already installed on your server
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install & Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
