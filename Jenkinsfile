node('nodejs') {

stage 'Build and publish npm'
env.PATH = "/usr/bin:${env.PATH}"
sh 'env'
withEnv(["PATH"="/usr/bin"]) {

sh 'npm install ci-npm-publish'
sh 'npm test'
sh 'npm version patch'
sh 'export VERSION=`jq ".version" package.json -r`'
sh 'echo VERSION=${VERSION} > version.properties'
}
withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: '17934371-8c05-4037-9b60-ebcab0f59be6', passwordVariable: 'NPM_PASSWD', usernameVariable: 'NPM_USER']]) {
    sh 'npm-publish --npmuser ${NPM_USER} --npmemail "contact@otomato.link" --npmpassword ${NPM_PASSWD}'
}


}
