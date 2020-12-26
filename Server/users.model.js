const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    userId: {
        type: Number,
    },
    userFirstName: {
        type: String
    },
    userLastName: {
        type: String
    },
    userPassword: {
        type: String
    },
    userRole: {
        type: String
    }
})

module.exports = mongoose.model('User', User);