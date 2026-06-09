const express = require('express');


const app = express();
app.get(`/` , (req , res) =>{
    res.send(`Hello World`);
})
app.get(`/about` , (req,res) => {
    res.send(`About Page`);
})
app.get(`/tgwzone` , (req, res) => {
    res.send(`Welcome to the TGW zone`);
})
app.listen(3000);