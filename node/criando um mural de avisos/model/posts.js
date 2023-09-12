module.exports = {
    posts: [
        { id: "qeqweq", title: "fodaewqe", description: "llllll" },
    ],
    getAll: function () {
        return this.posts
    },

    newPost: function (title, description) {
        this.posts.push({ id: createID(), title, description })
    }
}
function createID() {
    return Math.random().toString(36).substring(2, 9)
}