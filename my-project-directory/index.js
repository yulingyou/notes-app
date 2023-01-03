console.log("The notes app is running");

const NotesModel = require('./notesModel');

const note = new NotesModel();
console.log(note.getNotes());