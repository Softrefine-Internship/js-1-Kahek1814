// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.
//--not 
function insertDashes(numStr) {
    let result = [];

    for (let i = 0; i < numStr.length; i++) {

        result.push(numStr[i]);


        if (parseInt(numStr[i]) % 2 === 0 && i < numStr.length - 1) {
            result.push('-'); 
        }
    }


    return result.join('');
}

let input = "025468";
let output = insertDashes(input);
console.log(output);  

//another approch

var num ="025468" ;

var str = "025468";
var result = [str[0]];
for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push('-', str[x]);
  } else {
    result.push(str[x]);
  }
}


console.log(result.join(''));
