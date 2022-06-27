const mongoose = require('mongoose');
const validator = require('validator');

// Setting DB connection
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// Defined model
const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid')
        }
      }  
    },
    password: {
        type: String,
        minLength: 7,
        required: true,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error("Password is invalid")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// Create model instance
// const me = new User({
//     name: '     Mike   ',
//     email: 'EVGEN.BOND98@GMAIL.COM',
//     password:"hhgffffuyff"
// })

// // Save instance to the DB
// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error! ', error);
//})

//Defined tasks model

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

const task = new Tasks({
    description: '    By some onion'
})

task.save().then(() => {
    console.log(task);
}).catch((error)=>{
    console.log(error);
})
