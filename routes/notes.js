const notes = require('express').Router();
const uuid = require('../helpers/uuid');
//imports helperfiles file reader and writer
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

notes.get('/', (req, res) => { // this route gets all the note info and returns it
    console.info(`${req.method} request recieved`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request for new note recieved!`);
    // this deconstructed object is placed into the body of the request
    const { title, text } = req.body;

    if (req.body) { //checks to see that body contains note obj 
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };
        readAndAppend(newNote, './db/db.json'); //writes newNote content to databasefile
        res.json('Note created!');
    } else {
        res.error('error in note creation');
    }
});

module.exports = notes;