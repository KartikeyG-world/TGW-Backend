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
    res.status(200).json({
        message : "Notes created successfully"
    })
})
// GET /notes => get all notes 
app.get("/notes" , async (req , res) =>{
    const notes = await noteModel.find();
    res.status(200).json({
        message: "Notes fetched Successfully",
        notes: notes
    })
})
//DELETE /notes/:index => delete a note by index
app.delete("/notes/:id" , async (req, res) =>{
    const id = req.params.id;
    await noteModel.findByIdAndDelete({
        _id : id
    });
    res.status(200).json({
        message : "Note dleted Successfully"
    })
})
//PATCH /notes/:index => update a note by index
app.patch("/notes/:id"  , async (req,res)=>{
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findByIdAndUpdate({
        _id : id
    } , {
        description : description
    });
    res.status(200).json({
        message : "Notes Update Successfully"
    })
})



module.exports = app;