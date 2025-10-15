// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]

let arr=[ -3, 8, 7, 6, 5, -4, 3, 2, 1,-100];
// console.log(arr.sort())
//another approch

function makeSort(arr){
        let arr1=arr;
        
                for(let i=0;i<arr1.length;i++){
                    for(let j=i+1;j<arr1.length;j++){
                        if(arr1[i]>arr1[j]){
                            temp=arr1[i];
                            arr1[i]=arr1[j];
                            arr1[j]=temp;
                        }
                    }
                }
                return arr1;
}

console.log(makeSort(arr));
/*---------------------------output
PS D:\js-1\js-1-Kahek1814> node .\program-3.js
[
  -100, -4, -3, 1,
     2,  3,  5, 6,
     7,  8
] */