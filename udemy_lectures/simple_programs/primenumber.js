// check given Number is PrimeNumber

const num = parseInt(prompt('Enter a Positive Number'));
let isPrime = true;

if(num === 1){
    console.log(`${num} is neither PRIME NUMBER nor COMPOSITE NUMBER`);
} else if(num > 1){
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }


    if (isPrime) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}


