const {loginCheck } = require('../controller/user')
const { SuccessModel,ErrorModel } = require('../model/resModel.js')

const handleUserRouter = (req, res) => {
    const method = req.method //GET POST
    

    //登录
    if (method === 'POST' && req.path === '/api/user/login') {
        const {username,password } = req.body
        const result = loginCheck(username,password)
        if(result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('登录失败')
        }
    }


}

module.exports = handleUserRouter