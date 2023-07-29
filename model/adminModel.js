const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const AdminSchema = new mongoose.Schema({
    question: {
        type: ObjectId,
        ref: "question"
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("admin", AdminSchema)

