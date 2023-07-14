const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5001;
const api = require('./routes/index');


// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up  the public folder
app.use(express.static('public'));
//all requests beginning in /api go to index.js
app.use('/api', api);
//GET route to homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html')));
//GET route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html')));
//GET sends wildcards to homepage too
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html')));
//console prints the port
app.listen(PORT, () =>
    console.log(`App listening to localhost:${PORT}`));