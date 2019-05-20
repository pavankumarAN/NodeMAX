const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Root</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"> <button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (text) => {
            console.log(text);
            body.push(text);
            console.log(body);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split("=")[1];
            // fs.writeFileSync('message.txt', message); This will blocks execution untill it is done.
            //Another way.
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        console.log(url, method);
        // This block is commented to show how writeFile works
        // res.statusCode=302;
        // res.setHeader('Location', '/');
        // return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node App</title></head>');
    res.write('<body><h1>Hello Pavan</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;