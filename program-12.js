// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
let arr1 = [1, 2, 3]
let arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

let uniqueArr1=arr1.filter(index=>!arr2.includes(index))
let uniqueArr2=arr2.filter(index=>!arr1.includes(index))
console.log([...uniqueArr1,...uniqueArr2]);