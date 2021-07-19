#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')


program.version('1.0.0').description('Simple Password Generator')
program
.option('-l,--length <number>', 'length of password','12')
.option('-s, --save', 'save password to password.txt')
.option('-nn, --no-numbers', 'remove numbers')
.option('-ns, --no-symbols', 'remove symbols')
.parse()

const{length,save,numbers,symbols} = program.opts()
// Get Generated Password
const generatedPassword = createPassword(length,numbers,symbols)
// Save to file 
if(save){
    savePassword(generatedPassword)
}
// Copy to Clipboard
clipboardy.writeSync(generatedPassword)
//Output generated password
console.log(chalk.blue('Generated Password ') + chalk.bold(generatedPassword));
console.log(chalk.yellow('Password Copied to Clipboard'));