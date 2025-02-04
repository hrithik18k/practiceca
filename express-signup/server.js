const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 3000;
const connectDB = require('./config/db')
const userRouter = require('./routes/userRoutes')

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () =>{
    connectDB()
    console.log(`Server is Running at ${PORT}`)
})