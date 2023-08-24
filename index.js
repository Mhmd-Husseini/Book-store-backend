const express = require('express')
const app = express()
const mongooseConnect = require("./configs/mongoDB.connect");
require("dotenv").config()
app.use(express.json())

const authMiddleware = require("./middlewares/auth.middleware");
const authRouter = require("./routes/auth.routes")
const reviewRouter = require("./routes/review.routes")

app.use("/auth", authRouter)
app.use("/", authMiddleware, reviewRouter)

app.listen(8000, (err)=>{
    console.log('8000')
    mongooseConnect()
})


