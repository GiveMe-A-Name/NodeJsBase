const http = require('http')
// 通过node自带的querystring库，对url查询进行解析
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const { method, url } = req
    console.log(method, url)
    const query = querystring.parse(req.url.split('?')[1])
    console.log(query)
    res.end(
        JSON.stringify(query)
    )
})
server.listen(8080)