const express = require("express")
const categoryRoutes = express.Router()
const CategoryController = require("../controller/categoryController")

categoryRoutes.post("/add_category", CategoryController.add_category)
categoryRoutes.get("/get_category", CategoryController.get_category)

module.exports = { categoryRoutes }