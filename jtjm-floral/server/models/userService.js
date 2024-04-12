const { Schema, model} = require('mongoose');

const userServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    });
    
const UserService = model('UserService', userServiceSchema);

module.exports = UserService;