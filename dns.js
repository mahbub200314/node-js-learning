const dns = require('dns');

console.log( "dns :",dns)
dns.lookup("w3schools.com", (err, address)=> 
    console.log("w3school :", address)
) 
dns.lookup("google.com", (err, address)=> {
    console.log("google :", address)
    console.log("not found :",err)
}   
) 