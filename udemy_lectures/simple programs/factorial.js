// factorial of a given number 

let num = parseInt(prompt('Enter a number'));
let i, factorial = 1;

for(i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log(`Factorial of a given number ${num} is ${factorial}`);
 