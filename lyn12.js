const http = require('http');

const server = http.createServer((req, res) => {
    let postData = '';
    req.on('data', (data) => {
        postData += data.toString();
    });
    req.on('end', () => {
        res.write(postData.toUpperCase());
    });
});

server.listen(process.argv[2]);