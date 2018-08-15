const http = require('http')
const bl = require('bl')

const args = process.argv

// solution using Buffer List
/*http.get(args[2], res => {
    res.pipe(bl((err, data) => {
        if (err) return console.error(err);
        else {
            console.log(data.length)
            console.log(data.toString());
        }
    }))
})*/

// solution without bufferlist or concat-stream
http.get(args[2], res => {
    let fullData = '';

    res.on('data', (data) => {
        fullData+=data;
    })

    res.on('end', () => {
        console.log(fullData.length)
        console.log(fullData)
    })
})