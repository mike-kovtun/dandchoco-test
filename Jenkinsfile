/* import groovy.json.JsonOutput

def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger',
]

pipeline {

    agent any

    environment {
        BUILD_USER = ''
    }

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**', description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome'], )
    }

    stages {

        stage('Build') {
            steps {
                 echo "Running build "
            }
        }

        stage('Testing') {
            options {
                timeout(time: 300, unit: 'SECONDS')
            }

            steps {
                bat "npm i"
                bat "npx cypress run --browser=${BROWSER} --spec ${SPEC}"

            }
            
        }
        stage('Deploy') {
                steps {
                    echo "Deploying"
                }
            }
    }

} */

pipeline {
    agent any 

    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'Ej: cypress/integration/pom/*.spec.js')
        choice(name: 'BROWSER', choices: ['chrome'], )
    }

    stages {
        stage('Build') { 
            steps {
                // 
            }
        }
        stage('Test') { 
            steps {
                bat "npm i"
                bat "npx cypress run --browser=${BROWSER} --spec ${SPEC}" 
            }
        }
        stage('Deploy') { 
            steps {
                // 
            }
        }
    }
}