class NotesModel {
  constructor(){
    this.model = []
  }
  getNotes(){
    return this.model
  }
  addNote(note){
    this.model.push(note)
  }

  setNotes(notes) {
    this.model = notes;
  }

  reset(){
    this.model = []
  }
}

module.exports = NotesModel;