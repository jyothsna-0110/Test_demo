 let rows = Number(prompt('Enter number of rows'));
 let i, j, k, str = "";
 
 for(i = 1; i <= rows; i++) {
    for(j = 1; j <= rows-i; j++) {
        str += " ";
    }
    for(k = 0; k < 2 * i-1; k++) {
        str += '*';
    }
    str +="\n";
 }
 console.log(str);