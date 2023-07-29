const express = require("express")
const router = express.Router()

const {adminRoutes} = require("./adminRoutes")
const { categoryRoutes } = require("./categoryRoutes")

router.use('/admin', adminRoutes)
router.use('/category', categoryRoutes)

module.exports = router 