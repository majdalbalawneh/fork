// mona Salih — Today at 12:33 PM
// 2.Write a JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word of the string in upper case.
// Example string : 'the car drove fast'
// Expected Output : 'The Car Drove Fast';


function uppercase(string)
{
    let array1 = string.split(' ');
 let newarray1 = [];

    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the car drove fast"));
document.getElementById("task4").innerHTML;

/////////////////////////////////////////////
function palindrome(x){
    let arry= x.split('');
let l=arry.length;
for(let i=0; i<=l/2; i++){
    if (arry[i] == arry[l-1 -i]){
        continue;
   
    }
    else{
        return false;
    }

}
return true;
}

document.getElementById('task3').innerHTML= JSON.stringify(palindrome('ABCDCBA'));

//////////////////////////////////////////////

function decending(x){
    let l= x.length;
    let array= [];
    let max= x[0];
    let index= 0;
    for(let j=0; j<l; j++){
    for(let i=0; i<l; i++){
        if(x[i] >= max){
            max= x[i];
            index= i;
        }
    }
    array.push(max);
    x.splice(index,1)
    max= x[0];
}
return array;
}

document.getElementById('task2').innerHTML= JSON.stringify(decending([2,9,0,4]));

/////////////////////////////////////////////////////////

function Reverse(arr){
    let l=arr.length;
    let newArr=[];
    let e= l-1;
    for(let i=0; i<l; i++){
       newArr[i]= arr[j];
       e--;
       if (e<0){
           break;    
        }
}
    return newArr;
}


document.getElementById('task1').innerHTML= JSON.stringify(Reverse([8, 3, 4, 8, 4, 8]));



