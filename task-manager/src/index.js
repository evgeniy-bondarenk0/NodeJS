const express = require('express');
// Connect to moongodb
require('./db/mongoose')

// Connect mongoose model
const User = require('./models/user');
const Task = require('./models/task');

// Call express framework with params
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())

// Endpoint for creating users
app.post('/users', (req, res)=>{
    const user = new User(req.body)
    
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Endpoint for get all user info
app.get('/users', (req,res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch(() => {
        res.status(500).send()
    })
})

// Endpoint for get user info by _id
app.get('/users/:id', (req,res) => {
    const _id = req.params.id    
    
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
})

// Endpoint for creating tasks
app.post('/tasks', (req, res)=>{
    const task = new Task(req.body)
    
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Endpoint for get all tasks
app.get('/tasks', (req,res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch(() => {
        res.status(500).send()
    })
})

// Endpoint for get task by _id
app.get('/tasks/:id', (req,res) => {
    const _id = req.params.id    
    
    Task.findById(_id).then((tasks) => {
        if (!tasks) {
            return res.status(404).send()
        }
        res.send(tasks)
    }).catch(() => {
        res.status(500).send()
    })
})

// Run server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})