console.log('jyo'.padStart(20,'*').padEnd(30,'+').length);
const creditCard = function(number) {
    const str = number + '';
    const last=str.slice(-4);
    return last.padStart(str.length,'*');
}
console.log(creditCard(655672751786217));
console.log(creditCard('7861862556247618'));
console.log(creditCard(8726756454));
