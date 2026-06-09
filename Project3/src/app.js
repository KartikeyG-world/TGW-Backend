const express = require('express');
const noteModel = require('./models/note.model');

const app = express();
app.use(express.json());


//POST /notes => create a new note
app.post("/notes" , async (req , res) => {
    const data = req.body;
    await noteModel.create({
        title: data.title,
        description: data.description,
    })
    res.status(201).json({
        message : "Notes created successfully"
    })
})
// GET /notes => get all notes 
app.get("./notes" , async (req , res) =>{
    const notes = await noteModel.find();
    res.status(201).json({
        message: "Notes fetched Successfully",
        notes: notes

    })
})




module.exports = app;