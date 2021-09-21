// printing the even and odd numbers upto give range

let i=2, range;
range = Number(prompt('Enter Range'));
console.log(`The even numbers in the given range (${range}) is`);  

while(i <= range) {
    console.log(i);
    i += 2;
}

let j=1;
console.log(`The odd numbers in the given range (${range}) is`);

while(j <= range) {
    console.log(j);
    j += 2;
}