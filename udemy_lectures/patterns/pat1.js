// simple patterns

let i, j, rows;
rows = Number(prompt('Enter number of rows'));
for(i=1; i <= rows; i++) {
    for(j=1; j <= rows; j++) {
        document.write(j);
    }
  document.write('<br>');
}

document.write('<br>');

for(i=1; i <= rows; i++) {
    for(j=1; j <= i; j++) {
        document.write(j);
    }
    document.write('<br>');
}

document.write('<br>');

for(i=1; i <= rows; i++) {
    for(j=1; j <= rows; j++ ) {
        document.write('*');
    }
    document.write('<br>');
}

document.write('<br>');

for(i=1; i <= rows; i++) {
    for(j=1; j <= i; j++) {
        document.write('*');
    }
    document.write('<br>');
}

document.write('<br>');

