const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})
app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})