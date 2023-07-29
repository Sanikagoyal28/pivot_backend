
const { Errorhandler } = require("../middleware/errorHandler")
const Category = require("../model/categoryModel")

const add_category = async (req, res, next) => {
    try {

        const {category} = req.body

        if(!category)
        return next(new Errorhandler("Category is required", 400))

        const find_cat = await Category.findOne({ category: category.toLowerCase() })

        if (find_cat)
            return next(new Errorhandler("Category already added", 400))

        const add = await Category.create({
            category:category.toLowerCase()
        })

        return res.status(201).json({success: true, msg:"New Category Added"})

    }
    catch (err) {
        return next(err)
    }
}

const get_category = async (req, res, next) => {
    try {

        const categories = await Category.find({})
        console.log(categories)

        return res.status(200).json({ success: true, msg: "All Categories", categories })
    }
    catch (err) {
        return next(err)
    }
}

module.exports = { add_category, get_category }