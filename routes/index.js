const express = require('express');
//import notes content
const noteRouter = require('./notes');

//use express through app variable
const app = express();
//routes notes to index
app.use('/notes', noteRouter);
//export notes through index
module.exports = app;