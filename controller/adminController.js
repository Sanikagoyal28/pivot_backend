
const Admin = require("../model/adminModel")
const Question = require("../model/quesModel")
const { Errorhandler } = require("../middleware/errorHandler")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require('dotenv').config()

const login = async (req, res, next) => {
    try {

        const { username, password } = req.body

        if (!username || !password)
            return next(new Errorhandler("Username and Password is required", 401))

        const admin = await Admin.findOne({ username: username.toLowerCase() })

        if (!admin)
            return next(new Errorhandler("No Admin by this username found", 400))

        const admin_password = await bcrypt.compare(password, admin.password)

        if (!admin_password)
            return next(new Errorhandler("Wrong Password", 400))

        const accesstoken = jwt.sign({ _id: admin._id }, process.env.ACCESS_KEY, { expiresIn: "2d" })

        return res.status(200).json({ success: true, msg: "Logged In Successfully", accesstoken })

    }
    catch (err) {
        return next(err)
    }
}

// only to add an admin
const add_admin = async (req, res, next) => {
    try {
        const { username, password } = req.body

        const new_pass = await bcrypt.hash(password, 12)

        const admin = await Admin.create({
            username: username.toLowerCase(),
            password: new_pass
        })

        return res.status(200).json({ success: true, msg: "Admin added" })
    }
    catch (err) {
        return next(err)
    }
}

const add_question = async (req, res, next) => {
    try {

        const admin = req.admin

        if (!admin)
            return next(new Errorhandler("Admin not found", 400))

        const { question, category, difficulty, correct_answer, incorrect_answers } = req.body

        if (!question || !category || !difficulty || !correct_answer || incorrect_answers.length == 0)
            return next(new Errorhandler("All inputs are required", 400))

        const find_ques = await Question.findOne({ question: question.toLowerCase() })

        if (find_ques)
            return next(new Errorhandler("Question already added", 400))

        const add_ques = await Question.create({
            question: question.toLowerCase(),
            difficulty: difficulty.toLowerCase(),
            correct_answer: correct_answer,
            incorrect_answers: incorrect_answers,
            category: category
        })

        return res.status(200).json({ success: true, msg: "New Question Added",success: true})
    }
    catch (err) {
        return next(err)
    }
}

module.exports = {
    add_admin,
    login,
    add_question
}