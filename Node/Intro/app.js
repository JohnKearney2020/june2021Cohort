  
// require our math module
const math = require('./modules/math')
// require the 3rd party cowsay module
const cowsay = require('cowsay')

// set up variables
const num1 = 5
const num2 = 5

// use our module to get the sum
const sum = math.add(num1, num2)

// use the cowsay module to generate and console.log a message
console.log(cowsay.say({
  text: `the sum of ${num1} and ${num2} is ${sum}`
}));