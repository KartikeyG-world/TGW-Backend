const express = require('express');
const {dlopen} = require("process");

const app = express();
app.use(express.json());

const notes = [];
// POST /notes
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "Note created successfully",
    });
})
// GET /notes  
app.get('/notes' , (req,res)=>{
    res.status(200).json({
        message: " Notes fetched successfully",
        notes: notes
    });
});
// DELETE /notes/index 
app.delete(`/notes/:index` , (req,res)=>{
    const index = req.params.index
    delete notes[index];
    
    res.status(200).json({
        message: "Notes Deleted successfully"
    })
}); 

// PATCH /notes/index 
app.patch(`/notes/:index` , (req,res) =>{
    const index = req.params.index

    const description = req.body.description

    const title = req.body.title

    notes[index].description = description

    notes[index].title = title

    res.status(200).json({
        message:"Notes Updated successfully"
    })
})

module.exports = app;