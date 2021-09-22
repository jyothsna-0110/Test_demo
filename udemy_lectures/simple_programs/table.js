// Printing the table of a given number

let num, i;
num = Number(prompt('Enter a number to print that table'));

for(i=1; i <= 10; i++) {

    console.log(`${num} * ${i} = ${num * i}`);
}