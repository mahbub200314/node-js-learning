
const https = require('https');
const fs = require('fs');

const options = {
    key : fs.readFileSync('key.pem'),
    cert : fs.readFileSync('cert.pem')
}

const server = https.createServer(options, (req, res)=>{
  res.writeHead("200")
  res.end('Hello secure world your are hacked')
})

server.listen(443,()=>{
    console.log('HTTPS server running')
})