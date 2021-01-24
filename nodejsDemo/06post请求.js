const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log(postData)
            let postObj = JSON.parse(postData)
            console.log(postObj)
            console.log(`接受完毕`)
        })
        console.log(`content-type`, req.headers['content-type'])
        res.end('hell world')
    }
})
server.listen(8080, () => {
    console.log(`server running at poart 8080`)
}) 