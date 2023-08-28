import "./styles.scss"

const {randomNumberUpTo, sayHi} = require('matej-algebra')
const { add } = require("./utils.js")

const result = randomNumberUpTo(6)
const pozdrav = sayHi()

console.log(result, pozdrav)
console.log(add(2,3))
