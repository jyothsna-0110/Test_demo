let subjects=["English","Telugu","Hindi","Maths","Science","Social"];
let marks=new Array();
var num1;
for(var j=0;j<subjects.length;j++){
    num1=parseInt(prompt("Enter subject marks "+subjects[j]));
    marks[j]=num1;
}
for (m in marks){
    console.log(subjects[m]+" marks is :"+marks[m]);//display all subjects marks with subject names
}