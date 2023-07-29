const express = require("express")
const router = express.Router()

const {adminRoutes} = require("./adminRoutes")
const { categoryRoutes } = require("./categoryRoutes")
const { userRoutes } = require("./userRoutes")

router.use('/admin', adminRoutes)
router.use('/category', categoryRoutes)
router.use('/user', userRoutes)

module.exports = router 