console.log("The notes app is running");

const NotesClient = require('./notesClient');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const note = new NotesModel();
console.log(note.getNotes());
note.addNote('This is an example note')

const client = new NotesClient();
const view = new NotesView(note, client);
view.displayNotes();
view.displayNotesFromApi();

// client.loadNotes(
//   (notes) => {
    // This will be executed if notes are loaded correctly from the server
  //   model.setNotes(notes);
  //   view.displayNotes();
  // },
  // () => {
    // This will be executed if there's an error
    // view.displayError();
//   }
// );