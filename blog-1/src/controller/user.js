const loginCheck = (username, password) => {
    //
    if (username === 'agegg' && password === '123') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}