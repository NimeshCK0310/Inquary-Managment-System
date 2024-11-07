const express = require("express");
const notes = require("./data/notes");
const dotenv=require('dotenv');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is running..."); // API
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    // Convert req.params.id to a string to match the type in notes
    const note = notes.find((n) => n._id === req.params.id);

   
        res.json(note); // Send the specific note
   
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`)); // server
