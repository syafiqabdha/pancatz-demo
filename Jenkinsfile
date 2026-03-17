pipeline {
    agent any

    tools {
        // This must match the name you set in Manage Jenkins -> Tools
        nodejs 'node' 
    }

    environment {
        // Ensures Next.js runs in production mode during build
        NODE_ENV = 'production'
        // Supabase credentials (set in Jenkins global credentials)
        NEXT_PUBLIC_SUPABASE_URL = credentials('supabase_url')
        NEXT_PUBLIC_SUPABASE_ANON_KEY = credentials('supabase_anon_key')
    }

    stages {
        stage('Clean Install') {
            steps {
                echo 'Installing dependencies...'
                // Using 'npm ci' is faster and more reliable for Jenkins than 'npm install'
                sh 'npm ci'
            }
        }

        stage('Type Check & Lint') {
            steps {
                echo 'Checking TypeScript and Linting...'
                sh 'npm run lint'
            }
        }

        stage('Build Project') {
            steps {
                echo 'Building Next.js application...'
                // This triggers 'next build' which compiles Tailwind 4 and TS
                sh 'npm run build'
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
