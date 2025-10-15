// Write a JavaScript program to clone an array.

let arr=[1,2,3]
let newArr=[...arr]
console.log(newArr)
//------Another approch
let newArr1=[];
let i=0;
for(index of arr){
    newArr1[i++]=index;
}
console.log(newArr1)

//----------output
// PS D:\js-1\js-1-Kahek1814> node .\program-1.js
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]