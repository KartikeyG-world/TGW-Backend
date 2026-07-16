const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register" , authController.registerUser)

router.get("/test" , (req,res) =>{
    console.log("Cookie: " , req.cookies)
    res.json({
        message : "Test Router",
        cookies : req.cookies
    })
})



module.exports = router;