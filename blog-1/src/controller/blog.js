const getList = (author, keyword) => {
    //假数据
    return [
        {
            id:1,
            title: '标题A',
            content: '内容A',
            createTime: '1563865198729',
            author: 'zhangsan'
        },
        {
            id:2,
            title: '标题B',
            content: '内容B',
            createTime: '1563865198730',
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    //
    return {
        id:1,
        title: '标题A',
        content: '内容A',
        createTime: '1563865198729',
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含 title content 属性

    console.log('new blog:',blogData)
    return {
        id: 3 

    }
}

const updateBlog = (id,blogData = {}) => {
    // blogData 是一个博客对象，包含 title content 属性
    console.log('update blog:',id,blogData)
    return true
}

const delBlog = (id) => {
    console.log('new blog:',id)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}