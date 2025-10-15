// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let uniqueArray = [];

for (let index of arr) {
  if (!uniqueArray.includes(index)) {
    uniqueArray.push(index);
  }
}
console.log(uniqueArray);

let counts=0;
let maxCountChar='';
for(let i=0;i<uniqueArray.length;i++){
    let count=0;
   
    for(let j=0;j<arr.length;j++){
        if(uniqueArray[i]==arr[j]){
            count++;
        }
    }
    if(count>counts){
        counts=count
        maxCountChar=uniqueArray[i]
    }
}
console.log(maxCountChar,`${counts} times`)
