// finding leap year

let year=Number(prompt('Enter a Year'));
if(year % 400 == 0 || year % 4 == 0) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is not a Leap Year`);
}