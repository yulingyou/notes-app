const NotesModel = require('./notesModel')

beforeEach(() => {
  model = new NotesModel()
});

describe(NotesModel,() => {
  it('should return [] when we call getNotes at first ', () => { expect(model.getNotes()).toEqual([])
  });
  it('should return "Buy milk" and "Go to the gym" after add note',() => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk','Go to the gym'])
  });
  it('should rturn [] after reset', () => {
    model.addNote('Buy milk');
    model.reset();
    expect(model.getNotes()).toEqual([])
  });
})