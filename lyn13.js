const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/api/parsetime') {
        res.write(getJSONResponse(parsedUrl.query));   
    } else if (parsedUrl.pathname == '/api/unixtime') {
        res.write(getUnixEpochTime(parsedUrl.query))
    }
    res.end();
});

function getJSONResponse(query) {
    console.log('in JSON function')
    const date = new Date(query.iso);
    return JSON.stringify(
    {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    });
}

function getUnixEpochTime(query) {
    const time = new Date(query.iso);
    return JSON.stringify({"unixtime": time.getTime()});
}

server.listen(process.argv[2]);