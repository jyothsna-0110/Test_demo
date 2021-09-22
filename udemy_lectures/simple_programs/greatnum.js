// check the greatest number

let num1, num2;
num1 = parseInt(prompt('Enter first number'));
num2 = parseInt(prompt('Enter second number'));

if(num1 > num2) {
    console.log(`${num1} is Greaterthan ${num2}`);
}
else if(num1 < num2) {
    console.log(`${num2} is Greaterthan  ${num1}`);
}
else {
    console.log(`${num1} is Equal to ${num2}`);
}