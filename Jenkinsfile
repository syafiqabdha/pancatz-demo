pipeline {
    agent any

    // This block is what connects the "Tools" setting to your script
    tools {
        nodejs 'node' 
    }

    stages {
        stage('Check Environment') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install & Test') {
            steps {
                // If this fails, make sure you have a package.json in your repo
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
