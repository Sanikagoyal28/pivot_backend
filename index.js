
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./routes/index")
const { errorHandler } = require('./middleware/errorHandler')

require('dotenv').config();

const app = express();
app.use(express.json());

const corsOptions = {
    origin: true,
    credentials: true,           //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

mongoose.connect(process.env.URI)
    .then((res) => {
        app.listen(process.env.port)
        console.log("App connected at", process.env.port)
    })
    .catch((err) => {
        console.log(err)
    })

app.use(router)
app.use(errorHandler)