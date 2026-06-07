const url = require('url')

const myURL = new URL('https://www.example.com/products?id=10')

console.log(myURL.protocol)
console.log(myURL.search)