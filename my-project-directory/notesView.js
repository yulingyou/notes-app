class NotesView {
constructor(model, client) {
  this.model = model;
  this.client = client;
  this.mainContainerEl = document.querySelector('#main-container');
  this.buttonEl = document.querySelector('#add-note-btn')
  this.deleteBtn = document.querySelector('#delete-btn')

  this.buttonEl.addEventListener('click',() => {
    const newNote = document.querySelector('#add-note-input').value;
    this.addNewNote(newNote);
    const reset = document.querySelector('#add-note-input')
    reset.value = '';

    this.deleteBtn.addEventListener('click', () => {
      this.client.deleteNotes(error => this.displayError(error));
      this.model.reset();
      this.displayNotes();
    });

  })

  }

  displayNotes() {
    document.querySelectorAll('.note').forEach((element) => {
        element.remove();
    })
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
    this.client.createNote(newNote, () => {
      this.displayNotesFromApi();
      // this.displayError();
    })

  }

  displayNotesFromApi(){
    this.client.loadNotes(
      (response) => {
        this.model.setNotes(response);
        this.displayNotes();
      },
    );
  }

  displayError(){
    const errorEl = document.createElement("div");
    errorEl.id = "error";
    errorEl.textContent = "Oops, something went wrong!";
    this.mainContainerEl.append(errorEl)
  }

}

module.exports = NotesView;