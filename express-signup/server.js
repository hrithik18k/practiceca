const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const connectDB = require('./config/db')
const userRouter = require('./routes/userRoute')

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () =>{
    connectDB()
    console.log(`Server is Running at ${PORT}`)
})