// LCM of two numbers

let num1, num2, max;
num1 = Number(prompt('Enter First Number'));
num2 = Number(prompt('Enter Second Number'));

max = num1 > num2 ? num1 : num2;

while(1) {
    if(max%num1 == 0 && max%num2 == 0) {
        console.log(`The LCM of the ${num1} and ${num2} is ${max}`);
        break;
    }
    ++max;
}