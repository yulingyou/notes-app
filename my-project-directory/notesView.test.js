/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync('./index.html');

  model = new NotesModel();
  view = new NotesView(model);
})

describe(NotesView,() => {
  it('display two notes',() => {

    model.addNote('Hi')
    model.addNote('Hello')

    view.displayNotes();
    
    expect(document.querySelectorAll('div.note').length).toEqual(2)
  })
// fill the input
  it('add a new note',() => {
    const input = document.querySelector('#add-note-input');
    input.value = 'My new note';
// click the button
    const btn = document.querySelector('#add-note-btn')
    btn.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new note')
  } )
})