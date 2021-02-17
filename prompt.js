const prompt = require('prompt-sync')();

var nbr1 = prompt('enter first number?');

var nbr2 = prompt('enter second number?');

console.log("product is " + Number(nbr1) * Number(nbr2));
console.log("sum is " + (Number(nbr1) + Number(nbr2)));
console.log("subtract is " + (Number(nbr1) - Number(nbr2)));
console.log("divide is " + (Number(nbr1) / Number(nbr2)));
console.log("The remainder is " + (Number(nbr1) % Number(nbr2)));