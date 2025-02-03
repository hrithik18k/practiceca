const User = require('../models/usermodel')

const signUp = async (req, res) =>{
    try {
        console.log(req.body)
        if (!req.body) {
            return res.status(400).json({success: false, msg: "Request body is missing"})
        }
        const {username, email, password, dateOfBirth} = req.body
        if (username.trim() == ""){
            return res.status(400).json({success: false, msg: "Username Cannot be Empty"})
        }
        if (email.trim() == ""){
            return res.status(400).json({success: false, msg: "Email Cannot be Empty"})
        }
        if (password.length < 8 || password.length > 16){
            return res.status(400).json({success: false, msg: "Password length should be greater than 8 or less than or equal to 16"})
        }
        const newUser = new User({username, email, password, dateOfBirth})
        await newUser.save()
        return res.status(201).json({success: true, msg: "User Created Successfully"})
    } catch (error) {
        return res.status(500).json({success: false, msg: "Internal Server Error", desc: error.message})
    }
}

module.exports = signUp