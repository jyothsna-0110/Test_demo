// Ascending order and Descending order
let num1 = Number(prompt('Enter first Number'));
let num2 = Number(prompt('Enter Second Number'));
let num3 = Number(prompt('Enter Third Number'));

if(num1 > num2 && num1 > num3 ) {
    if(num2 > num3) {
        console.log(`Ascending Order of the given numbers is ${num3}, ${num2}, ${num1}`);
        console.log(`Descending Order of the given numbers is ${num1}, ${num2}, ${num3}`);
    }
    else {
        console.log(`Ascending Order of the given numbers is ${num2}, ${num3}, ${num1}`);
        console.log(`Descending Order of the given numbers is ${num1}, ${num3}, ${num2}`);
    }
} else if(num2 > num1 && num2 > num3) {
    if(num1 > num3) {
        console.log(`Ascending Order of the given numbers is ${num3}, ${num1}, ${num2}`);
        console.log(`Descending Order of the given numbers is ${num2}, ${num1}, ${num3}`);
    }
    else {
        console.log(`Ascending Order of the given numbers is ${num1}, ${num3}, ${num2}`);
        console.log(`Descending Order of the given numbers is ${num2}, ${num3}, ${num1}`); 
    }
} else if(num3 > num1 && num3 > num2) {
    if(num1 > num2) {
        console.log(`Ascending Order of the given numbers is ${num2}, ${num1}, ${num3}`);
        console.log(`Descending Order of the given numbers is ${num3}, ${num1}, ${num2}`);
    }
    else {
        console.log(`Ascending Order of the given numbers is ${num1}, ${num2}, ${num3}`);
        console.log(`Descending Order of the given numbers is ${num3}, ${num2}, ${num1}`);
    }
}
