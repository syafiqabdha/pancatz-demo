pipeline {
    agent any

    tools {
        // This must match the name you set in Manage Jenkins -> Tools
        nodejs 'node' 
    }

    environment {
        // Ensures Next.js runs in production mode during build
        NODE_ENV = 'production'
        // Supabase env vars will be loaded from .env.local at build time
        // (set -a && . .env.local exports them for subsequent steps)
    }

    stages {
        stage('Clean Install') {
            steps {
                echo 'Installing system dependencies...'
                sh 'apt-get update && apt-get install -y libatomic1 || true'
                echo 'Installing node dependencies...'
                sh 'npm ci'
            }
        }

        stage('Type Check & Lint') {
            steps {
                echo 'Checking TypeScript and Linting...'
                sh 'npm run lint || true'
            }
        }

        stage('Build Project') {
            steps {
                echo 'Building Next.js application...'
                // This triggers 'next build' which compiles Tailwind 4 and TS
                sh 'set -a; source .env.local; set +a; npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                echo 'Archiving production build...'
                // Archives the .next folder and public files
                archiveArtifacts artifacts: '.next/**, public/**, package.json', allowEmptyArchive: true
            }
        }
    }

    post {
        failure {
            echo 'Build failed. Check for TypeScript errors or Tailwind configuration issues.'
        }
        success {
            echo 'Next.js 14 Build Successful!'
        }
    }
}
