
const http = require('http');
const url = require('url');

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build an API', completed: false }
];


const server = http.createServer(function(req, res){

const parsedUrl = new URL(req.url, `http:://${req.headers.host}`)
const pathname = parsedUrl.pathname;

//set cors headers (for development)
res.setHeader('Acces-Control-Allow-Origin', '*');
res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION');
res.setHeader('Acces-Control-Allow-Headers', 'Content-Type');


     
    res.write(`hello second server`)
  res.end()
})

server.listen(3000, ()=>{
    console.log(`server is running at http://localhost:3000`)
})