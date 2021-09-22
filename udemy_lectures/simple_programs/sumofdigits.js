// program to find sum of digits of given number

let num, rem, sum = 0, temp;

num = parseInt(prompt('Enter a number'));
temp = num;

while(num > 0) {
    rem = num % 10;
    sum += rem;
    num = parseInt(num / 10);
}

console.log(`The sum of tha all digits of the given number ${temp} is ${sum}`);