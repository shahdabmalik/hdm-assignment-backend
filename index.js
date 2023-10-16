require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/routes')


const app = express()
const PORT = process.env.PORT || 4400

app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL
}))

app.use("/api", routes)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => { app.listen(PORT, () => { console.log("Server Started"); }) })
    .catch((err) => console.log(err))
