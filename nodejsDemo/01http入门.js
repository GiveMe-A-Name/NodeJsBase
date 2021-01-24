const http = require('http')
// 每当有 HTTP 请求到达服务器时，createServer 中传入的函数就被自动执行。
// 被传入的回调函数，也被叫做请求处理函数

// 实际上，由 createServer 构造函数返回的 Server 对象是一个 EventEmitter
// 通过EventEmiiter 去进行发布/订阅
const server = http.createServer((req, res) => {
    res.write('hello nodejs')
    res.end()
}).listen(8080)