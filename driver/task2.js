
console.log("round1");

// river First Round
// 1. Write a JavaScript function that return reverse a array. 
// Example x = 834848;
// Expected Output : 848438
console.log("task1");
// let arra=[];
// function reverse(num){
//     for (let i= num.length-1;i>=0,i--){

//     }
// }

console.log("task2");
const str = 'The Car Drove Fast';
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1,4);

}
const str2 = arr.join(" ");
console.log(str2);
// ////////////////////////////

console.log("round2");
console.log("task3");
// 1. Write a JavaScript function that return true if the passed string palindrome false if 
// not 
// Example string:ABCDCBA
// Expected Output :True




function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'false';
        }
    }
    return 'true';
}

const string = "ABCDCBA";
const value = checkPalindrome(string);
console.log(value);


///////////////////////////////////////////

// 2.Write a JavaScript function that return the sort array decending

// Example x = 2904;
// Expected Output : 9420

console.log("task4");

const points = [2,9,0,4];
points.sort(function(a, b){return b-a});
console.log(points); 

////////////////////////////////////////////
// console.log("task4,2");

// const array = str.split(" ");
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).sort() + arr[i].slice(1,4);

// }
// const stray2 = arr.join(" ");
// console.log(str2);



