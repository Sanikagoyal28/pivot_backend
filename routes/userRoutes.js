const express = require("express")
const userRoutes = express.Router()
const UserController = require("../controller/userController")

userRoutes.post("/num_of_ques", UserController.num_of_question)
userRoutes.get("/questions/:category/:difficulty/:num_of_ques", UserController.get_questions)

module.exports = { userRoutes }