// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]


let arr1=[3,5,1]
let arr2=[4,2]

function getSortedMerged(array1,arry2){
//    let arr=[...array1,...arry2]
    let arr=[];
    let k=0;
    for(let i=0;i<array1.length;i++){
        arr[k++]=array1[i];
    }
     for(let i=0;i<arry2.length;i++){
        arr[k++]=arry2[i];
    }
    

     for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
console.log(getSortedMerged(arr1,arr2))




// --another approch
console.log([...arr1,...arr2].sort())
//----ouput
// PS D:\js-1\js-1-Kahek1814> node .\program-4.js 
// [ 1, 2, 3, 4, 5 ]
//[ 1, 2, 3, 4, 5 ]
