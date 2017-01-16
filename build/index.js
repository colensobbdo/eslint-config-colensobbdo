var fs = require('fs')
var path = require('path')
var lib = require('../lib')

var rules = '\n'
var file = path.join(__dirname, 'TEMPLATE.md')

Object.keys(lib.rules)
    .sort()
    .forEach((rule) => {
        var settings = JSON.stringify(lib.rules[rule], false, 2)
        var link = `<a href="http://eslint.org/docs/rules/${rule}.html" target="_blank">${rule}</a>`
        var line = `1. ${link}: ${settings} \n`
        rules += line
    })

fs.readFile(file, 'utf8', (readErr, data) => {
    if (readErr) {
        return console.log(readErr)
    }

    fs.writeFile('README.md', data + rules, (writeErr) => {
        if (writeErr) {
            return console.log(writeErr)
        }
    })
})
