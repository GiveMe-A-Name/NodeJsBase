const querystring = require('querystring')
const serverHandler = (req, res) => {
    // 获得method和url，
    // 这里的url是包括路径和query查询的，所以后面我们需要进行解析
    const { method, url } = req
    // 解析urlQuery,
    // 选取'？'号后面的字符串，使用querystring包中的parse方法，进行解析成对象
    const query = querystring.parse(url.split('?')[1])
    const requestObj = {
        method,
        url,
        query
    }
    // 把response的响应体'Content-Type'设置成'application/json'
    res.setHeader('Content-Type', 'application/json')
    if (req.method === 'GET') {
        res.end(
            JSON.stringify(requestObj)
        )
    }
    if (req.method === 'POST') {
        let requestData = ''
        // req的on方法来监听事件
        // 监听data事件，
        // 传入回调函数，回调函数会传入一个chunk二进制参数，我们对这个二进制数据进行实际的操作
        req.on('data', chunk => {
            requestData += chunk.toString()
        })
        // 监听end事件，表示该数据已经传递完毕，我们需要进行处理
        req.on('end', () => {
            requestObj.requestData = requestData
            res.end(
                JSON.stringify(requestObj)
            )
        })
    }

}

module.exports = serverHandler