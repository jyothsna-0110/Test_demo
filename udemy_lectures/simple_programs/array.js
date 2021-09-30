let num = Number(prompt('Enter the Size of the Array '));
let Arr = [], i, j, target;

for(i = 0; i < num; i++) {
    Arr[i]= Number(prompt('Enter the elements of Array'));
}
document.write('Array is : ' +Arr+"</br>"+"</br>");  


target = Number(prompt('Enter a target'));
document.write('entered target is '+target+"</br>"+"</br>");

for(i = 0; i <= Arr.length; i++) {
    for(j = 0; j < Arr.length; j++) {

        if(Arr[i] + Arr[j] === target && Arr[i] !== Arr[j] && Arr[i]>Arr[j]) {
            document.write('your target reached at indexes of '+i+ ' and '+j+"</br>");
        }
   
    }    
}   


