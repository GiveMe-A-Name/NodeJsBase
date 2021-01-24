const http = require('http')
const server = http.createServer((req, res) => {
    // 处理post请求
    let body = []
    req.on('data', (chunk) => {
        // 把传递过来的二进制数据，加入到body数组
        body.push(chunk)
    }).on('end', () => {
        // 通过Buffer.concat.toString()把数据转化为字符串
        body = Buffer.concat(body).toString()
        console.log(body)
    })
    res.write('hello nodejs')
    res.end()
})
server.listen(8888)