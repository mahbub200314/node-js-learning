// const fs = require("fs")

// console.log("hello, before file read");

// fs.readFile("./myLife.txt", 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log("File contents:" ,data)
// });
// console.log("after file read")

// console.log('First');

// setTimeout(() => console.log('Third'), 0);

// Promise.resolve().then(() => console.log('Second'));

// console.log('Fourth');





// .......................................

// const fs = require('fs');

// console.log('1. Starting sync read...');
// const data = fs.readFileSync('./myLife.txt', 'utf8');
// console.log('2. File contents:', data);
// console.log('3. Done reading file');




// .........................................


const inc1 = require("./counter")

console.log(inc1())
console.log(inc1())

