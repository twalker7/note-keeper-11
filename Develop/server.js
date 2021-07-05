const notes = require('./db/db.json');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 443;



// homepage 
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,  './public/index.html'))
});

//notes page 
app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,  './public/notes.html'))
});


app.get('/api/notes', (req, res)=>{

});


app.post('/api/notes', (req, res)=>{

});




app.listen(PORT, ()=>{
    console.log(`API server now on port ${PORT}!`);
});