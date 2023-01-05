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

  it('calls fetch and post data', (done) => {
    // 1. Instantiate the class
    const client = new NotesClient();
    // 2. We mock the response from `fetch`
    fetch.mockResponseOnce(JSON.stringify({
      name: "more value",
      id: 456
    }));
    // 3. We call the method, giving a callback function
    client.createNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("more value")
      expect(returnedDataFromApi.id).toBe(456);
       // 4. Tell Jest our test can now end.
      done();
    });
  });
});
