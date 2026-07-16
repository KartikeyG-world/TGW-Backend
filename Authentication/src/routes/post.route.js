const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const router = express.Router();

router.post("/create", async (req, res) => {


    const token = req.cookies.TGW;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({
            _id: decoded.id
        })
        console.log(user);

        // res.send("Post created successfully")
    } catch (err) {
        return res.status(401).json({
            message: "Token is invalid"
        })
    }
    res.send("Post created successfully")
})
router.get("/get", async (req, res) => {
    const token = req.cookies.TGW;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access"
        })
    }
    res.send("Post retrieved successfully");
})

module.exports = router;