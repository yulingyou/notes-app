class NotesClient {
  loadNotes(callback){
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  createNotes(callback) {
    fetch('http://localhost:3000/notes', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
    })
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

module.exports = NotesClient;