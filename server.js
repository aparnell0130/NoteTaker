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

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})
app.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './db/db.json'))
})

app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;

    // Using a RegEx Pattern to remove spaces from newNote
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newNote.routeName = newNote.name.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);

    newDb.push(newNote);
    const dbContent = JSON.stringify(newDb);
    console.log(dbContent);
    fs.writeFile('./db/db.json', dbContent, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });

    res.json(newNote);
});

app.delete('api/notes/:id', function (req, res) {
    for (let i = 0; i < newDb.length; i++) {
        const id = newDb[i].id;

    }

    // use filter method to filter out matching element
})

app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})