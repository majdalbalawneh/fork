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


