/* 
You have a long flowerbed in which some of the plots are planted,
 and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's,
 where 0 means empty and 1 means not empty, and an integer n, 
 return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function plantTree(flowerbed, n) {
    let count = 0;

  
    for (let i = 0; i < flowerbed.length; i++) {
      
        if (flowerbed[i] === 0 &&(i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) { 

            flowerbed[i] = 1; 
            count++; 
            if (count >= n) {
                return true;
            }
        }
    }

   
    return count >= n;
}
let test1= [1,0,0,0,1];

console.log(plantTree(test1,1))
console.log(plantTree(test1,2))
//--outut

// PS D:\js-1\js-1-Kahek1814> node .\program-5.js
// true
// false

//-----another approch
let n = 2;
let arr = [1, 0, 0, 0, 1]; 
let i = 0;

while (n > 0 && i < arr.length) {
    if (arr[i] === 1) {
        i++; 
    } else {
        if (i === 0 && arr[i + 1] === 0) { 
            arr[i] = 1;
            n--;
            console.log(arr, n, "--0");
        } else if (i === arr.length - 1 && arr[i - 1] === 0) { 
            arr[i] = 1;
            n--;
            console.log(arr, n, "--1");
        } else if (arr[i - 1] === 0 && arr[i + 1] === 0) { 
            arr[i] = 1;
            n--;
            console.log(arr, n, "--2");
        }
        i++;
    }
}

console.log(arr, n === 0); 
