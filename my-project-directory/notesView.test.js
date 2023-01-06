/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesClient = require('./notesClient')

jest.mock("./notesClient");

describe(NotesView,() => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  
    client = new NotesClient();
    model = new NotesModel();
    view = new NotesView(model,client);
    
  })
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
    const btn = document.querySelector('#add-note-btn');
    btn.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new note')
  } )

  it('should remove the previous notes when displayNotes is called twice',() => {
    model.addNote('one');
    model.addNote('two');

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })

  it('should load the notes',(done) =>{
    const clientMock = {
      loadNotes: (callback) => callback(['fake note 1', 'fake note 2']),
    };
    const mockView = new NotesView(model, clientMock);

    mockView.displayNotesFromApi();
    const divs = document.querySelectorAll('div.note');
    const divsLength = divs.length;
    expect(divsLength).toBe(2);
    expect(divs[0].textContent).toEqual('fake note 1');
    expect(divs[1].textContent).toEqual('fake note 2');
    done();
  });

  it("should save the note to server", () => {
    const input = document.querySelector('#add-note-input');
    input.value = "Some text in there";

    const btn = document.querySelector('#add-note-btn')
    btn.click();

    expect(client.createNote).toHaveBeenCalledTimes(1);
  });

})