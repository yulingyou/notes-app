class NotesView {
constructor(model) {
  this.model = model;
  this.mainContainerEl = document.querySelector('#main-container');
  this.buttonEl = document.querySelector('#add-note-btn')

  this.buttonEl.addEventListener('click',() => {
    const newNote = document.querySelector('#add-note-input').value;
    this.addNewNote(newNote);
  })
  }

  displayNotes() {
    const notes = this.model.getNotes()

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  addNewNote(newNote){
    this.model.addNote(newNote);
    this.displayNotes();
  }
}

module.exports = NotesView;