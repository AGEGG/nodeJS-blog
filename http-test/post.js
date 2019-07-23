//post 测试
const http = require('http')
const server = http.createServer((req,res) => {
    if(req.method === 'POST') {
        //数据格式
        console.log('content-type',req.headers['content-type'])
        //接受数据
        let postData = ''
        req.on('data',chuck => {
            postData += chuck.toString()
        })
        req.on('end',() => {
            console.log('postData',postData)
            res.end('hello world') //在这里返回因为异步
        })
    }
    //路由测试
    if(req.method === 'GET') {
        const url = req.url
        const path = url.split('?')[0]
        res.end(path)

    }
});

server.listen(3000);
console.log('post-text OK')

//http://localhost:3000/ 
//post方法 raw json
//{"name": "张三","age": "25"}
