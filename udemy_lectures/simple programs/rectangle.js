// Area,Perimeter,Diagonal of the Rectangle

let lengthOfRectangle = parseInt(prompt('Enter the Length of the Rectangle'));
let widthOfRectangle = parseInt(prompt('Enter the Width of the Rectangle'));

let areaOfRectangle = lengthOfRectangle * widthOfRectangle;
let perimeterOfRectangle = 2 * (lengthOfRectangle + widthOfRectangle);
let diagonalOfRectangle = Math.sqrt((lengthOfRectangle*lengthOfRectangle) + (widthOfRectangle * widthOfRectangle));

console.log(`Area of the Rectangle is ${areaOfRectangle}  squaremeters`);
console.log(`Perimeter of the Rectangle is ${perimeterOfRectangle} meters`);
console.log(`Diagonal of the Rectangle is ${diagonalOfRectangle}`);

