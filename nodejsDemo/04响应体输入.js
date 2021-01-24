const http = require('http')
const server = http.createServer((req, res) => {
    // 设置响应头
    /*
        给响应头部添加 key -- value
        res.setHeader('Content-Type', 'application/json')
    */

    // 重写响应头
    let obj = {
        name: 'xiaoming',
        age: 18
    }
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(JSON.stringify(obj))

    // res.end() 作用
    // 结束响应，告诉客户端所有消息已经发送。
    // 当所有要返回的内容发送完毕时，该函数必须被调用一次

    // 我们也可以在res.end()传入数据，
    // 就比如response.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.end()
})
server.listen(8888)