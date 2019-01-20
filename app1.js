const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    const url = req.url;
    console.log(url);
    const method = req.method;
    console.log(method);

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody= Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            fs.writeFile('message.txt',message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });       
        });
        
        
    }
    res.write('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to HOMEPAGE</title></head>');
    res.write('<body><h1>Hello from Pavan</h1></body>')
    res.write('</html>');
    res.end();
});
server.listen(3300);

