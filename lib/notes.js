const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');

function findById(id) {
    const result = notes.filter(notes => notes.id === id)[0];
    return result;
  }

function createNewNote(body) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notes, null, 2)
    );
    return note;
}

module.exports = {
    createNewNote,
    findById
};