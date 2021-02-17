const prompt = require('prompt-sync')();

var f = prompt('enter the temparature in fahrenheit:');

var c = ((Number(f) - 32)*5)/9;

console.log("the temparature in celcius is " + c.toFixed(2));
