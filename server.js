const notes = require('./db/db.json');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 443;


app.use(express.static('public'));

// Necessary middleware functions ... parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());



// homepage 
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,  './public/index.html'))
});

//notes page 
app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname,  './public/notes.html'))
});

app.get('/api/notes', (req, res)=>{
    let results = notes;
    
    res.json(results);
});

app.delete('/api/notes/:id', (req, res)=>{
    
})
/* function createNewAnimal(body, animalsArray) {
    const animal = body;
    animalsArray.push(animal);
    // write to animals.json
    fs.writeFileSync(
      path.join(__dirname, '../data/animals.json'),
      JSON.stringify({animals: animalsArray}, null, 2)
    );
    // return finished code to post route for response
    return animal;
  }
*/

app.post('/api/notes', (req, res)=>{
    req.body.id = notes.length.toString();
    notes.push(req.body);
    console.log(JSON.stringify(req.body));

    fs.writeFileSync(
      path.join(__dirname, '/db/db.json'),
      JSON.stringify({myNotes: notes}, null, 2)
    );
    res.json(req.body);
});





app.listen(PORT, ()=>{
    console.log(`API server now on port ${PORT}!`);
});