
const express = require("express")
const mongoose = require("mongoose")

require('dotenv').config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.URI)
    .then((res) => {
        app.listen(process.env.port)
        console.log("App connected at", process.env.port)
    })
    .catch((err) => {
        console.log(err)
    })
