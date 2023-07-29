const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const QuesSchema = new mongoose.Schema({
    category: {
        type: ObjectId,
        ref: "category"
    },
    difficulty: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    correct_answer: {
        type: String,
        required: true
    },
    incorrect_answers: [{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model("question", QuesSchema)

