// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

// let arr1 = [1, 2, 3, 4, 5, 6, 66, 66, 66, 66, 6];
// let arr2 = [3, 4, 5, 7, 66, 66];


// let mergedArr = [...arr1, ...arr2];


// let uniqueArr = [...new Set(mergedArr)];

// console.log(uniqueArr);
// //---output
// [
//   1, 2,  3, 4,
//   5, 6, 66, 7
// ]

//--another approch

let arr1 = [1, 2, 3, 4, 5, 6, 66, 66, 66, 66, 6];
let arr2 = [3, 4, 5, 7, 66, 66];

let mergedArr = [];

for (let i = 0; i < arr1.length; i++) {
    if (!mergedArr.includes(arr1[i])) {
        mergedArr.push(arr1[i]);
    }
}


for (let i = 0; i < arr2.length; i++) {
    if (!mergedArr.includes(arr2[i])) {
        mergedArr.push(arr2[i]);
    }
}

console.log(mergedArr);


