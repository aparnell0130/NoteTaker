# NoteTaker

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Tools & Technologies](#Tools_&_Technologies)
  - [Code](#Code)
  - [Live Link](#Live_Link)
  - [Example](#Example)
  - [License](#License)
  - [Author Info](#Author_Info)

## Description
This application will allow you to take notes, then store or delete them as needed! It is designed for users seeking a tool to help optimize organization. Start by entering a meaningful title for the note, with a max length of 28 characters(including spaces). Next you can enter in any text you would like! The save button will not appear until you have entered some data for both the note title and note text.

    Note: You will only need to do the installation once.

##  Installation
- Install node
- Download repo zip file
- Enter "npm i" in VSCode integrated terminal or GitBash/Terminal while in correct folder.

## Usage
### After install 
1. Open VSCode integrated terminal or GitBash/Terminal
2. Path to correct folder
3. Run file by entering "node server.js"
4. Enter http://localhost:3000 in url or ctrl/cmd + click the url in the terminal.

## Tools_&_Technologies
- JavaScript
- HTML
- CSS
- Node
- Express

## Code
 Delete API
```JS
app.delete('/api/notes/:id', function (req, res) {
    const deleteID = req.params.id
    const index = newDb.findIndex(({ id }) => id === deleteID)
    newDb.splice(index, 1)
    console.log('Item successfully removed!')
    fs.writeFile("./db/db.json", JSON.stringify(newDb), function (err) {
        if (err) throw (err);
    });
    res.json(newDb)
})

```
## Live_Link
- [Application Live Link](https://note5-tak3r.herokuapp.com/)

## Example
![ALT TEXT](img/noteTaker.gif)

## License
- MIT License

Copyright (c) [2020] [Aaron Parnell]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

## Author_Info
  Github: [aparnell0130](https://github.com/aparnell0130)  
  LinkedIn: [Aaron Parnell](https://www.linkedin.com/in/aaron-parnell-1ab4661b3/)  
  Email: aparnell0130@gmail.com

[Back to top](#NoteTaker)
