const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "category"
    },
    difficulty: {
        type: String,
        required: true
    },
    correct_answer: {
        type: Number,
        default:0,
        required: true
    },
    total_ques: {
        type: Number,
        default:0,
        required: true
    },
    score:{
        type: Number,
        default:0,
        required: true
    },
})

module.exports = mongoose.model("user", UserSchema)

