const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['new', 'in progress', 'finished'],
        default: 'new'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('ToDo', ToDoSchema)