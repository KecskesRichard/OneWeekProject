const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // duties: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'ToDo'
    // }]
}, {
    timestamps: true
})

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema)