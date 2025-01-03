const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 23.89999

console.log(otherNumber.toPrecision(1));

console.log(Math.round(`${otherNumber}`));
console.log(Math.ceil(4.0000000001000001));

const min = 10
const max = 20

console.log(Math.abs(Math.floor(Math.random() * max - min + 1) + min))