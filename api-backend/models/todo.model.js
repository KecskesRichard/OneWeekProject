const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['new', 'in progress', 'finished'],
        default: 'new'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    udpatedAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('ToDo', ToDoSchema)