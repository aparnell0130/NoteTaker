const express = require('express')
const app = express()
const path = require('path')

const fs = require('fs')

const PORT = process.env.PORT || 3000
const newDb = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
// stringify JSON Object




// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))


app.get('/api/notes', function (req, res) {
    res.json(newDb)
})

app.get('/api/notes/:id', function (req, res) {
    var currentId = req.params.id;

    console.log(currentId);

    for (var i = 0; i < newDb.length; i++) {
        if (currentId === newDb[i].id) {
            return res.json(newDb[i]);
        }
    }

})

app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;

    // Using a RegEx Pattern to remove spaces from newNote
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html


    console.log(newNote);
    let notesId = newNote.title.replace(/\W+/g, "").toLowerCase() + (newDb.length + 1);
    newNote.id = notesId
    newDb.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(newDb), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });

    res.json(newNote);
});

app.delete('/api/notes/:id', function (req, res) {
    const deleteID = req.params.id
    const index = newDb.findIndex(({ id }) => id === deleteID)
    newDb.splice(index, 1)
    console.log('Item successfully removed!')
    fs.writeFile("./db/db.json", JSON.stringify(newDb), function (err) {
        if (err) throw (err);
    });

    res.json(newDb)
    // use filter method to filter out matching element
})

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})