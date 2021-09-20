/*let weightMark = 78;
let heightMark = 1.69;

let weightMark2 = 95;
let heightMark2 = 1.88;

let weightJohn = 92;
let heightJohn = 1.95;

let weightJohn2 = 85;
let heightJohn2 = 1.76;


let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;

let markBMI2 = weightMark2 / heightMark2 ** 2;
let johnBMI2 = weightJohn2 / heightJohn2 ** 2;

console.log("BMI of Mark is : "+markBMI);
console.log("BMI of John is : "+johnBMI);
console.log("BMI of Mark2 is : "+markBMI2);
console.log("BMI of John2 is : "+johnBMI2);

let markHigherBMI;
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if(markBMI > johnBMI){
    console.log(`mark's BMI is  Higherthan the john's BMI `);
}
else{
    console.log(`John's BMI is Higherthan the Mark's BMI`);

}

markHigherBMI = markBMI2 > johnBMI2;
console.log(markHigherBMI);

if(markBMI2 > johnBMI2){
    console.log(`mark's BMI is  Higherthan the john's BMI `);
}
else{
    console.log(`John's BMI is Higherthan the Mark's BMI`);


}*/

// coding challenge 3
// const scoreDolphins=(96+108+89)/3;
// const scoreKoalas=(88+91+110)/3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if(scoreKoalas<scoreDolphins){
//     console.log("Dolphins team is the winner");
// } else if(scoreKoalas>scoreDolphins){
//     console.log("Koalas team is the winner");
// }
// else if(scoreKoalas===scoreDolphins){
//     console.log("both teams win the trophy");
// }

// const scoreDolphins=(97+112+101)/3;
// const scoreKoalas=(109+95+123)/3;
// console.log(scoreDolphins,scoreKoalas);
// if(scoreKoalas<scoreDolphins && scoreDolphins>=100){
//     console.log("Dolphins team is the winner");
// } else if(scoreKoalas>scoreDolphins && scoreKoalas>=100){
//     console.log("Koalas team is the winner");
// }
// else if(scoreKoalas===scoreDolphins){
//     console.log("both teams win the trophy");
// }

// const scoreDolphins=(97+112+80)/3;
// const scoreKoalas=(109+95+90)/3;
// console.log(scoreDolphins,scoreKoalas);
// if(scoreKoalas<scoreDolphins && scoreDolphins>=100){
//     console.log("Dolphins team is the winner");
// } else if(scoreKoalas>scoreDolphins && scoreKoalas>=100){
//     console.log("Koalas team is the winner");
// }
// else if(scoreKoalas===scoreDolphins && scoreKoalas>=100 && scoreDolphins>=100){
//     console.log("both teams win the trophy");
// }
// else{
//     console.log("No one win the trophy");

// }


//coding challenge 4

// let bill=430;
// let tip;
// console.log(`The bill is ${bill}, the tip is ${tip=bill<=300 && tip>=50?bill*(15/100):bill*(20/100)} and total bill is ${bill+tip}  `);

//fundamentals part2
//coding challenge 1
const average=(a,b,c)=>(a+b+c)/3;
    const averageDolphins=(average(85,54,41));  
    const averageKoalas=(average(23,34,27));  


function checkWinner(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win the trophy (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= 2*avgDolphins) {
        console.log(`Koalas win the trophy(${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No one wins the trophy');
    }

}
checkWinner(averageDolphins,averageKoalas);