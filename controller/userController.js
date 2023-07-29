const User = require("../model/userModel")
const Question = require("../model/quesModel")
const { Errorhandler } = require("../middleware/errorHandler")

const num_of_question = async (req, res, next)=>{
    try{

        const {category, difficulty} = req.body

        if(!category || !difficulty)
        return next(new Errorhandler("Category and Difficulty level are required", 400))

        const questions =  await Question.find({
            category: category, 
            difficulty: difficulty.toLowerCase()
        })

        const num = questions.length

        return res.status(201).json({success: true, num_of_ques: num})

    }
    catch(err){
        return next(err)
    }
}

const get_questions = async (req, res, next)=>{
    try{

        const {category, difficulty, num_of_ques} = req.params

        if(!category || !difficulty || !num_of_ques)
        return next(new Errorhandler("All inputs are required", 400))

        const questions =  await Question.find({
            category: category, 
            difficulty: difficulty.toLowerCase()
        }).populate('category').limit(num_of_ques)

        return res.status(201).json({success: true, questions, msg:"All Questions"})

    }
    catch(err){
        return next(err)
    }
}

module.exports = {
    num_of_question,
    get_questions
}