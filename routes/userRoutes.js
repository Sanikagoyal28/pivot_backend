const express = require("express")
const userRoutes = express.Router()
const UserController = require("../controller/userController")

userRoutes.get("/num_of_ques/:category/:difficulty", UserController.num_of_question)
userRoutes.get("/questions/:category/:difficulty/:num_of_ques", UserController.get_questions)
userRoutes.post("/submit", UserController.submit_quiz)
userRoutes.get("/dashboard/:category", UserController.get_results)
userRoutes.get("/dashboard/:category/:difficulty", UserController.sort_result)

module.exports = { userRoutes }