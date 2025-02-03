const mongoose = require('mongoose')


const connectDB = () =>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB