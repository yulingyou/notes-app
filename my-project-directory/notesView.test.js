/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

describe(NotesView,() => {
  it('display two notes',() => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('Hi')
    model.addNote('Hello')

    view.displayNotes();
    
    expect(document.querySelectorAll('div.note').length).toBe(2)
  })
})