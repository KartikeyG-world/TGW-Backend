const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
async function registerUser(req, res) {
    const { userName, name, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        email
    })
    if (isUserAlreadyExist) {
        return res.status(409).json({
            message: "User Already exist"
        })
    }
    const user = await userModel.create({
        userName, name, email, password
    })
    const token = jwt.sign(
        {
            id: user._id
        }, process.env.JWT_SECRET)

    res.cookie("TGW", token)
    res.status(201).json({
        message: "User registered successfully",
        user,
    });

}

module.exports = { registerUser };