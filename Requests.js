const http = require('http');

const server = http.createServer((req,res) => {
    console.log(`We are displaying the url`);
    console.log(req.url);

    console.log(`We are displaying the method`);
    console.log(req.method);
    
    console.log(`We are displaying the headers`);
    console.log(req.headers);
        
});

server.listen(3300);