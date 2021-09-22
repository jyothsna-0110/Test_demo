// swaping two numbers without using third variable

let a, b;

a = parseInt(prompt('Enter first number')); //10
b = parseInt(prompt('Enter second number')); //20

console.log(`Before swaping a = ${a}, b = ${b} `);

a = a + b; //10+20=30 
b = a - b; //30-20=10
a = a - b; //30-10=20

console.log(`After swaping a = ${a}, b = ${b}`);

a = a * b; // 20 * 10 = 200
b = a / b; // 200 / 10 = 20
a = a / b; // 200 / 20 = 10

console.log(`After swaping a = ${a}, b = ${b}`);

// swamping two numbers with using third variable

let firstNumber, lastNumber, temp;
firstNumber = parseInt(prompt('Enter first number'));
secondNumber = parseInt(prompt('Enter second number'));

console.log(`Before swaping x = ${firstNumber}, y = ${secondNumber} `);

temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;

console.log(`After swaping x = ${firstNumber}, y = ${secondNumber}`);