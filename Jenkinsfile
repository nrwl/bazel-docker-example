pipeline {
  agent any
  stages {
    stage('Publish image') {
      steps {
        sh 'bazel run //src/server:push'
      }
    }
  }
}