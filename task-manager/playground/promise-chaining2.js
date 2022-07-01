require('../src/db/mongoose')

const Task = require('../src/models/task')


Task.findByIdAndDelete('62bc471b0c4d1c520885e28a').then((task) => {
    console.log(task)

    return Task.countDocuments({completed: false })
}).then((result) => {
    console.log(result)

}).catch((e) => {
    console.log(e)
})