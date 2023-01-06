const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks()

describe(NotesClient,() =>{
  it('calls fetch and loads data', (done) => {
    // 1. Instantiate the class
    const client = new NotesClient();
    // 2. We mock the response from `fetch`
    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));
    // 3. We call the method, giving a callback function
    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value")
      expect(returnedDataFromApi.id).toBe(123);
       // 4. Tell Jest our test can now end.
      done();
    });
  });

  it('createNote adds a note to the database', () => {
    fetch.mockResponseOnce(JSON.stringify(
      "Mock note"
    ));
    const client = new NotesClient();
    client.createNote('Mock note');

    expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/notes')
  });

  it("catched fetech error from loadNotes", (done) => {
    const client = new NotesClient();

    fetch.mockRejectedValue("Oops, something went wrong!");

    client.loadNotes(() => {},(error) => {
        expect(error).toBe("Oops, something went wrong!");
        done();
      });
  })

});
