const fs = require('fs');

const args = process.argv;

fs.readdir(args[2], (err, list) => {
    list.filter(file => file.split('.')[1] === args[3]).forEach(file => console.log(file))
});