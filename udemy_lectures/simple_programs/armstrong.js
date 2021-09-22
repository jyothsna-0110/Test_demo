// check whether given number is armstrong or not

let num, rem, temp, sum = 0;
num=parseInt(prompt('Enter a number'));

temp = num;
while( num > 0) {
    rem = num % 10; // finding one's place digit
    sum += (rem * rem * rem);
    num = parseInt(num / 10);//removing last digit from num
}
if(temp == sum) {
    console.log(`The given number ${temp} is Armstrong Number`);
} else {
    console.log(`The given number ${temp} is not a Armstrong Number`);
}