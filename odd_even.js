const prompt = require('prompt-sync')();

var f = prompt('enter a number:');

var num1 = Number(f);

if(num1 % 2 == 0){
	console.log(num1 + " is an even number");
}else if(num1 % 2 == 1){
	console.log(num1 + " is an odd number");
}else{
	console.log(f + " is not a number");
}
