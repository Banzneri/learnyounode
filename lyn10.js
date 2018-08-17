const net = require('net');
const bl = require('bl');

let date = new Date();
let YYYY = zeroCheck(date.getFullYear());
let MM = zeroCheck(date.getMonth()+1);
let dd = zeroCheck(date.getDate());
let hh = zeroCheck(date.getHours())
let mm = zeroCheck(date.getMinutes());

function zeroCheck(date) {
    return date < 10 ? "0" + date : date;
}

const server = net.createServer((socket) => {
    const date = new Date();
    const dateString = YYYY + "-" + MM  + "-" + dd + " " + hh + ":" + mm;
    socket.write(dateString);
    socket.end("\n");
});

server.listen(process.argv[2], () => console.log("Server listening"));