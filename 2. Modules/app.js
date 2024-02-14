// Common JS, every file is module(by default)
// Modules - Encapsulated Code (Only Share Minimum/what we want)

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternateFlavour')

require('./mindGranade')

// console.log(data)

// console.log(names)
//sayHi('John')
//sayHI('Roman')

//use with properties
// sayHi('Sumit')
// sayHi(names.john)
// sayHi(names.roman)

//in this way no one has the access to the secret key