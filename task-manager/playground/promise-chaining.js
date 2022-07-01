require('../src/db/mongoose')
const User = require('../src/models/user')

// 62b85d23a61e83c13d61db41

User.findByIdAndUpdate('62b859b5c94244dd4bbc0312', { age: 1}).then((user) => {
    console.log(user)

    return User.countDocuments({ age:1 })
}).then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})