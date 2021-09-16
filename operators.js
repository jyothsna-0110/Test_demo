//arthmatic operators(+,-,*,/,%,++,--)
var a=9;
var b=3;
var c=a+b;//12
c++;// add 1 to the existing value
document.write("add"+c);//13
++c;//add 1 to the existing c value
document.write("add"+c);//14
c=a-b;//6
--c;//subtract 1 to the existing value
document.write("sub"+c);//5
c--;// subtract 1 to the previous c value
document.write("sub"+c);//4
c=a*b;
document.write("mul"+c);//27
c=a/b;
document.write("div"+c);//3
c=a%b;
document.write("mod"+c);//0

// string operators is nothing but concatenation operators '+' it is used for concating two strings
 a=10;
 b="20";
 c=a+b;
document.write("addition is:"+c);//1020
c=a+parseInt(b);
document.write("addition is:"+c);//30 because parse int converting string to integer and the two variables will add
let firstName="Jyothsna";
let lastName="Chennuri";
document.write(firstName+lastName);//JyothsnaChennuri
document.write(firstName+" "+lastName);//Jyothsna Chennuri

//assignment operators(=,+=,-=,*=,/=,%=)
let i=9;
i+=2;
console.log("the result of i=i+1 is:"+i);//11
i-=2;
console.log("the result of i=i-1 is:"+i);//9
i*=2;
console.log("the result of i=i*1 is:"+i);//18
i/=2;
console.log("the result of i=i/1 is:"+i);//9
i%=2;
console.log("the result of i=i+1 is:"+i);//1

// comparison operators(==,!=,<,>,<=,>=,===,!==)

let j=prompt("Enter first Number:"), s=prompt("Enter second Number:");
if(parseInt(j)==parseInt(s)){
    console.log(j+" is Equal to "+ s);
}
else if(parseInt(j)<=parseInt(s)){ 
    console.log(j+" is Lessthan or Equal to "+ s);
}
else if(parseInt(j)>=parseInt(s)){
    console.log(j+" is Greterthan or Equal to "+ s);
}
else{
    console.log(j+" is not equal to "+j);
}

var k=2, l="2";
if(k===l){
    console.log(k,l +"are same but different data type");
}
else{
    console.log("numbers are same");
}


