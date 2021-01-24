const http = require('http')
const server = http.createServer((req, res) => {
    // 通过ES6解构，得到method, url, headers
    const { method, url, headers } = req
    // method：方法
    // url: 请求地址的路径path，并不包括协议与端口号。
    console.log(method, url)
    // headers：是一个对象，包含所有请求头的信息
    console.log(headers)
    res.write('hello nodejs')
    res.end()
})
server.listen(8888)