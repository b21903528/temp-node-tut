// Modules

// CommonJs. every file is module (by default) in Node JS
// Modules - Encapsulated code (only share minimum)

//Import function from names
const names = require('./4-names') // always start with './' or '..//' if it's one-level up 
// IMPORT Function from utils
const sayHi = require('./5-utils')
//try with alternative-flavour.js
const data = require('./6-alternative-flavour')

//import the mind grenade module
const sum = require('./7-mind-grenade')


// run the code from data
console.log(data)


//console.log(names)


sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)