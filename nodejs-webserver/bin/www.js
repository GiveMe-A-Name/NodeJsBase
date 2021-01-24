const http = require('http')
const serverHandler = require('../app.js')
const PORT = 8080

const server = http.createServer(serverHandler)
server.listen(PORT, () => {
    console.log(`server running at port 8080`)
})