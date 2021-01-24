const querystring = require('querystring')
const fs = require('fs')
const serverHandler = (req, res) => {
    const { method } = req
    if (method === 'POST') {
        let binaryData = Buffer.alloc(0)
        req.on('data', chunk => {
            binaryData = Buffer.concat([binaryData, chunk])
        })
        req.on('end', () => {
            console.log(binaryData.length)
            fs.writeFileSync('test.jpg', binaryData)
            res.end('hello world\n')
        })
    } else {
        res.end('Error')
    }
}

module.exports = serverHandler