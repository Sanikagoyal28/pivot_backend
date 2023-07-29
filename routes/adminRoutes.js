const express = require("express")
const adminRoutes = express.Router()
const AdminController = require("../controller/adminController")
const {authToken} = require("../middleware/verifyToken")

adminRoutes.post("/login", AdminController.login)
adminRoutes.post("/add", AdminController.add_admin)
adminRoutes.post("/add_question", authToken, AdminController.add_question)

module.exports = { adminRoutes }