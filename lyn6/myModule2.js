const fs = require('fs');
const myModule = require('./myModule1.js');

const args = process.argv;

const callback = (err, data) => {
    if (err) {
        console.log("There was an error: " + err)
    } else {
        data.forEach(file => console.log(file));
    }
}

myModule(args[2], args[3], callback);