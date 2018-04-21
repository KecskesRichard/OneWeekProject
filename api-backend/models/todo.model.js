const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

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
    userId: {
        type: String,
        required: true,
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

ToDoSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('ToDo', ToDoSchema)