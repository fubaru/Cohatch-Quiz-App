const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const quizSchema = new Schema(
    {
        pin: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        topic: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        expiry: {
            type: Date,
            required: true,
        },
        created: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    }
);

const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;