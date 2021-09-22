//Area, Perimeter, diagonal of the Square 

let side = parseInt(prompt('Enter side of the Square'));

let areaOfTheSquare = side * side;
let perimeterSquare = 4 * side;
let diagonalOfSquare = side * Math.sqrt(2);

console.log(`Area of the square is ${areaOfTheSquare} squaremeters`);
console.log(`Perimeter of the square is ${perimeterSquare} meters`);
console.log(`Diagonal of the Square is ${diagonalOfSquare}`);


