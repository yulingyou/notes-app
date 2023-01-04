console.log("The notes app is running");

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const note = new NotesModel();
console.log(note.getNotes());
note.addNote('This is an example note')

const view = new NotesView(note);
view.displayNotes();