// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];

let sumArray = [];
let maxLength = Math.max(arr1.length, arr2.length);  

for (let i = 0; i < maxLength; i++) {
  
  let sum = (arr1[i] || 0) + (arr2[i] || 0);
  sumArray.push(sum);
}

console.log(sumArray);

