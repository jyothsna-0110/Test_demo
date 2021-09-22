//print the numbers upto given range by using loops

let range = Number(prompt('Enter Range'));
let i=1;
console .log(`The given Range is ${range}`);

// using for loop

// for (i=1;i <= range; i++) {
//     console.log(i);
// }

// using while loop 
while (i <= range) {
    console.log(i);
    i++;
}
