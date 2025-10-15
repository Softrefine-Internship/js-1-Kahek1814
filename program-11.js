// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]
let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

// let unionArray = [...new Set([...arr1, ...arr2])];

// console.log(unionArray);
//---another approch
let unionArray=[];
for (let i = 0; i < arr1.length; i++) {
  if (!unionArray.includes(arr1[i])) {
    unionArray.push(arr1[i]);
  }
}


for (let i = 0; i < arr2.length; i++) {
  if (!unionArray.includes(arr2[i])) {
    unionArray.push(arr2[i]);
  }
}

console.log(unionArray);

