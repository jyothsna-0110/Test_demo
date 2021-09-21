// Reverse of the given number
let num, rem, rev=0, temp;

num = parseInt(prompt('Enter a number'));
temp = num;

while(num != 0) {

    rem = num % 10;
    rev = (rev*10) + rem;
    num = parseInt(num / 10);
    
}

console.log(`Reverse of the given number ${temp} is ${rev} `);