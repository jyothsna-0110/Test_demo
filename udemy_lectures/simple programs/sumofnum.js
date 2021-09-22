// Sum of Natural Numbers

let num, i, sum = 0;
num = Number(prompt('Enter a number'));

for(i=1; i<=num; ++i) {
    sum += i;
}

console.log(`Sum Of first ${num} Natural Numbers are ${sum}`);