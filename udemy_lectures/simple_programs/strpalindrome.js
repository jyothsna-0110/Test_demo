let isPalinStr = prompt('Enter a string');
let i;
let len = isPalinStr.length;

for(i = 0; i <= len / 2; i++) {
    if(isPalinStr[i] !== isPalinStr[len-1-i]) {
        console.log(`${isPalinStr} is not a palindrome`);
        break;
    } else {
        console.log(`${isPalinStr} is a palindrome`);
    }
}


