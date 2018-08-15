const http = require('http');
const args = process.argv;

http.get(args[2], res => {
    res.setEncoding("utf8");
    res.on("data", console.log);
    res.on("error", console.error);
});