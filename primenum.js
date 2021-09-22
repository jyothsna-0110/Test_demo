let num = Number(prompt('enter a number')), i;
let isprime=true;

if(num === 1) {
    console.log('Number is neither prime nor composite number'); 

}
else if(num > 1) {
    for(i=2; i<num;i++){
        if(num % i==0) {
            isprime=false;
            break;
        }
    }
    if(isprime){
        console.log('primenumber');
    }
    else {
        console.log('not prime');
    }
}