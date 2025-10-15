// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

//---first approcch--1
var examplearr=[];
var i=0;
function flatArray(array){
    for(index of array){
        if(typeof index =="number"){
            examplearr[i++]=index;
        }else{
            flatArray(index);
        }
    }
}

flatArray([1, 2, [3, 4], [5, [6, 7]]]);
console.log(examplearr)
//another approch 
let arr=[1, 2, [3, 4], [5, [6, 7]]];
let newArr1=arr.flat(Infinity);
console.log(newArr1);
//-----------output
// PS D:\js-1\js-1-Kahek1814> node .\program-2.js
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]

