const http = require('http');
const url = require('url');
var server = http.createServer(function(req, res){
 const parsedUrl = url.parse(req.url, true)
console.log(parsedUrl)

   res.writeHead(200, {
      "content-type": "text/html",
      "x-Powered-By":"node.js",
      "cache-control" : "no-chache, no-store, must-revalidate"
   })
res.write("Hello MAHBUB. welcome you in backend world")
res.end()
})

 server.listen(3000, ()=>{
    console.log(`server running http://localhost:3000/`)
 })
