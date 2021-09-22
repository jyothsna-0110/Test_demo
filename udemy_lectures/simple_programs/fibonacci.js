// Fibonacci Series
let range=parseInt(prompt('Enter a Range'));

let firstNumber=0;
let secondNumber=1;
let nextNumber;

console.log('Fibonacci Series is');

console.log( firstNumber);
console.log(secondNumber);
let i = 2;
while(i < range) {

    nextNumber = firstNumber + secondNumber;
    console.log(nextNumber);
   
    firstNumber = secondNumber;
    secondNumber = nextNumber;

    i++;
}
