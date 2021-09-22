// printing the even and odd numbers upto give range

let i=2, range;
range = Number(prompt('Enter Range'));
console.log(`The even numbers in the given range (${range}) is`);  

for(i=2;i<=range;i+=2){
    console.log(i);

}

// while(i <= range) {
//     console.log(i);
//     i += 2;
// }

let j=1;
console.log(`The odd numbers in the given range (${range}) is`);

while(j <= range) {
    console.log(j);
    j += 2;
}