const fs = require('fs');

module.exports = function (dirName, ext, callback) {
    fs.readdir(dirName, (err, list) => {
        if (err) return callback(err);
        else {
            list = list.filter(file => file.split(".")[1] == ext);
            return callback(null, list);
        }
    })
}