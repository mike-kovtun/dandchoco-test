import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

/* def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
} */


pipeline {

    agent any
    
    environment {
        BUILD_USER = ''
    }
    
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome'],)
    }
    

    /* options {
        ansiColor('xterm')
    } */

    stages {
        
        stage('Build'){
            steps {
        // there a few default environment variables on Jenkins
        // on local Jenkins machine (assuming port 8080) see
        // http://localhost:8080/pipeline-syntax/globals#env
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm ci'
        sh 'npm run cy:verify'
      }
        }

        stage('start local server') {
            steps {
        sh 'nohup npm run start &'
      }
    }

        stage('Testing') {
            environment {
        CYPRESS_RECORD_KEY = credentials('7d578c01-d51f-4ec9-abcb-31cd9846eb6c')
        CYPRESS_trashAssetsBeforeRuns = 'false'
            steps {
                bat "npm i"
                bat "npx cypress run --browser=${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

    post {

    always {
      echo 'Stopping local server'
      sh 'pkill -f http-server'
    }
}