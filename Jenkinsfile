pipeline {
    agent any

    // This ensures Node.js is available on your Jenkins server
    tools {
        nodejs 'node' // Note: This name must match what you set in Global Tool Configuration
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing modules...'
                sh 'npm install'
            }
        }

        stage('Lint & Test') {
            steps {
                echo 'Running tests...'
                // This runs the "test" script defined in your package.json
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                // Only keep this if you have a build script, otherwise delete this stage
                sh 'npm run build --if-present'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
        }
        failure {
            echo 'Build failed! Please check the npm logs above.'
        }
    }
}
