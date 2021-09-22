let num=parseInt(prompt('Enter a number'));
let rem, temp, final=0;

temp = num;

while(num > 0) {
    rem = num % 10;
    final = final * 10 + rem; 

    num = parseInt(num / 10);
}   

if(final == temp) {
    console.log(`${temp}  is a PALINDROME !!`);
} else {
    console.log(`${temp} is NOT a PALINDROME !!`);
}
