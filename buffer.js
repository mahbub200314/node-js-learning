// Create an empty buffer
const buffer = Buffer.alloc(10);

// Write a string to the buffer
buffer.write('Hello');
console.log(buffer);

console.log(buffer.toString());

// Write bytes at specific positions
buffer[5] = 44; // ASCII for ','
buffer[6] = 32; // ASCII for space
buffer.write('Node', 7);
console.log(buffer.toString());


// buffer copy now :

const source = Buffer.from('Hello, World!');
const target = Buffer.alloc(source.length);

console.log("target length : ", target)
source.copy(target)
console.log("copy : ", target)

const partialText = Buffer.alloc(5)
console.log("partialText : ", partialText)

source.copy(partialText, 0, 7)

console.log("Partial TEXT copy :",partialText)

console.log(partialText.toString())