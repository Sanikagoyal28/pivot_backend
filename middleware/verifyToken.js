const jwt = require("jsonwebtoken")
require('dotenv').config();
const Admin = require('../model/adminModel')

const authToken = async (req, res, next) => {
    try {
        const token = req.header("accessToken") || req.header("Authorization")

        if (!token)
            return res.status(401).json({ success: false, msg: "Please login or signup before proceeding" });

        // const newToken = token.split(" ")[1]
        const newToken = token.substring(7)

        const verifyToken = jwt.verify(newToken, process.env.ACCESS_KEY, async (err, payload) => {
            if (err)
                return res.status(400).json({ success: false, msg: "Invalid or Token is expired" })

            else {
                const id = payload._id;

                const admin = await Admin.findById(id)

                if (!admin)
                    return res.status(400).json({ success: false, msg: "Admin by this email does not exists" })

                req.admin = admin

                next();
            }
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, msg: err })
    }
}

module.exports = {authToken}