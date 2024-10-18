const { log } = require('console')
const {readFileSync , writeFile }= require('fs')
const path = require('path')

const filePath = path.join('./content','tet.txt')

console.log(filePath)
const base = path.basename(filePath)

console.log(base)

const absolute = path.resolve(__dirname,'content','text.txt')
console.log(absolute)
