const http = require('http');
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<h1>Hai</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Create</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === "/users") {
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body>');
        res.write('<ul><li>Pavan</li><li>Max</li></ul>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST') {
        const info = [];
        req.on('data' , (text) => {
            console.log(text);
            info.push(text);
        });
        req.on('end',() => {
            const parseBody = Buffer.concat(info).toString();
            const ele = parseBody.split("=")[1];
            console.log(ele)
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3002);