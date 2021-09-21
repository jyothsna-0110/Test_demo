// const country="India";
// const continent="Asia";
// let population=12;
// console.log("country name is : "+country);
// console.log("Continent name is : "+continent);
// console.log("Population in the "+country+" is : "+population);
// let isIsland=false;
// let language='hindi';
// console.log(typeof isIsland);
// console.log(typeof(population));
// console.log(typeof country);
// console.log(typeof language);

// let count=population/2;
// console.log(count);
// count++;
// console.log(count);

// const countryName="Finland";
// const populationfin=6;
// console.log("Population in "+countryName +" is : "+populationfin);
// console.log(population>populationfin);
// let avgPopulation=33;
// console.log(population<avgPopulation);
// let description;
// description=country+" is in "+continent+" ,"+" and its "+count+" million people speak "+language;
// console.log(description);

// description=`${country} is in ${continent}, and its ${count} million people speak ${language} `;
// console.log(description);

// if(population > avgPopulation){
//     console.log(`${country}'s population is above average`);
// } else {
//     let difference=avgPopulation-population;
//     console.log(`${country}'s population is ${difference} million below average`);
// }

// console.log(Boolean(0));//false
// console.log(Boolean(''));//false
// console.log(Boolean(null));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(NaN));//false
// console.log(Boolean('Jyothsna'));//true
// console.log(Boolean({}));//true


// let favourite=prompt("Enter your favourite number!");
// if(favourite==5){
//     console.log("your favourite number is 5");
// }

//switch statement
// let day=prompt('Enter a day');
// switch (day){
//     case 'Monday' :
//         console.log('You entered Monday');
//         break;
//         case 'Tuesday'  :
//             console.log('You entered Tuesday');
//             break;
//             case 'Wednesday' :
//                 console.log('You entered Wednesday');
//                 break;
//                 case 'Thursday' :
//                 console.log('You entered Thursday');
//                 break;
//                 case 'Friday':
//                 console.log('You entered Friday');
//                 break;
//                 case  'Saturday' :
//                     console.log('You entered Saturday');
//                     break;
//                     case 'Sunday' :
//                         console.log('You entered Sunday');
//                         default:
//                             console.log('Day is invalid');
// }

// let age=20;
// console.log(`I like to drink ${age>=18?'wine':'Water'}`);

//functions
// function name(firstName,lastName){
//     const myname=`My Name is ${firstName} ${lastName}.`
//   return myname;
// }
// const fullName=name('Jyothsna','Chennuri');
// console.log(fullName);

// console.log(name('Jyothsna','Chennuri'));
//const age1=calcage(1998);//it is possible before initialization function we can call
// function calcage(birthYear) {
//     return 2020-birthYear;
// }
// const age1=calcage(1998);
// console.log(age1);

// //const age2=calcage2(1998); it is not possible before initialization
// const calcage2=function(birthYear){
//     return 2022-birthYear;
// }

// const age2=calcage2(1998);
// console.log(age2);


// //Arrow Fuctions

// const calcage3= birthYear=> 2021-birthYear;
// const age3=calcage3(1998);
// console.log(age3);


// const retirementYears=birthyear=>{
//     const age=2021-birthyear;
//     const retire=65-age;
//     return (`You will retire after ${retire} years`);
// }
// console.log(retirementYears(1998));

// // function calling in other function

// function cutFruitPieces(fruits){
//     return fruits * 3;
// }

// function fruitjuiceprocess(mangoes,oranges){
//     const mangoPieces=cutFruitPieces(mangoes);
//     const orangePieces=cutFruitPieces(oranges);

//     const juice=`Juice with ${mangoPieces} piece of mango and ${orangePieces} pieces of orange.`
//     return juice;
// }
// console.log(fruitjuiceprocess(4,5));


// Arrays
// const friends=['susmitha','ashwini','mounika','sravani','meghana','dharani','sandya'];
// console.log(friends);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
 
// const birthYear=new Array(1998, 1999, 2000, 1997, 1996, 1997, 1998);
// console.log(birthYear.length);
// console.log(birthYear);

// Objects

const jyothsna={
    firstName : 'Jyothsna',
    lastName : 'Chennuri',
    age : 2021 - 1998,
    job : 'Software Developer',
    friends : ['Mounika','Vamshi','AjayBharath']
};
console.log(jyothsna);

console.log(jyothsna.lastName);
console.log(jyothsna['lastName']);

const nameKey='Name';
console.log(jyothsna['first'+nameKey]);// bracket notation
console.log(jyothsna['last'+nameKey]);

//console.log(jyothsna.'last'+nameKey);// Dot Notation will not accept string

const intrestedIn=prompt('What do you want to know about Jyothsna? choose among firstname, lastname, age, job, friends');

if(jyothsna[intrestedIn]) {
    console.log(`Jyothsna ${intrestedIn} is ${jyothsna[intrestedIn]}`);
} else {
    alert('Wrong Requset! choose among firstname, lastname, age, job, friends');
}

console.log(`${jyothsna.firstName} has ${jyothsna.friends.length} friends, and her bestfriend is called ${jyothsna.friends[0]}`);