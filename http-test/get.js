// get 测试
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    console.log('method:', req.method) //GET
    const url = req.url
    console.log('url:',url)
    req.query = querystring.parse(url.split('?')[1])
    console.log('query:',req.query)
    res.end(
        JSON.stringify(req.query)
    )

})

server.listen(3000)
console.log('get-text OK')

//http://localhost:3000/api/blog/list?author=zhangsan&keyword=A