// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

let array = [
  { title: "C++", author: "Bjarne" },
   { title: "C++", author: "Bjarne" },
    { title: "C++", author: "Bjarne" },
     { title: "C++", author: "Bjarne" },
       { title: "Java", author: "James" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
   { title: "Java", author: "James" },
    { title: "Java", author: "James" },
     { title: "Java", author: "James" },
];


let uniqueArray = array.filter((value, index, self) => 
  index === self.findIndex((obj) => 
    obj.title === value.title && obj.author === value.author
  )
);

console.log(uniqueArray);

//another apprch
let uniqueArr1 = [];
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i != j) {
            if (array[i].title == array[j].title && array[i].author == array[j].author) {
                array.splice(j, 1);
            }
        }
    }
}
console.log(array);



