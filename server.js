// require modules
const express = require('express')
const path = require('path')
const fs = require('fs')

// start express and create variable to use express through out server file
const app = express()
// assign local port and environment port
const PORT = process.env.PORT || 3000
// variable to parse db.json file and make available 
const newDb = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// makes public folder available to browser/user 
app.use(express.static('public'))

// get api for db.json
app.get('/api/notes', function (req, res) {
    res.json(newDb)
})

// get specific id to display from db.json
app.get('/api/notes/:id', function (req, res) {
    // set variable for required parameter id
    var currentId = req.params.id;
    // loop though db.json file to return selected id
    for (var i = 0; i < newDb.length; i++) {
        if (currentId === newDb[i].id) {
            return res.json(newDb[i]);
        }
    }
})

// post users inputs
app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newNote = req.body;
    // Using a RegEx Pattern to remove spaces and special characters except underscore from newNote title
    // then setting newNote title as newNote id
    let notesId = newNote.title.replace(/\W+/g, "").toLowerCase() + (newDb.length + 1);
    newNote.id = notesId
    // push entire new note into db.json array
    newDb.push(newNote);
    // write new array to db.json file
    fs.writeFile('./db/db.json', JSON.stringify(newDb), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });

    res.json(newNote);
});

// delete request for specific id
app.delete('/api/notes/:id', function (req, res) {
    // set variable for required parameter id
    const deleteID = req.params.id
    // get index if the deleteId is equal to db.json id
    const index = newDb.findIndex(({ id }) => id === deleteID)
    // remove matching id from array
    newDb.splice(index, 1)
    console.log('Item successfully removed!')
    // write new array to db.json file
    fs.writeFile("./db/db.json", JSON.stringify(newDb), function (err) {
        if (err) throw (err);
    });

    res.json(newDb)
    // use filter method to filter out matching element
})

// get notes html file
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

// get index html file or use index html if route entered does not exist
app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})