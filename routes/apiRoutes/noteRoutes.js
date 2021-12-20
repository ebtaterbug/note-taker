const router = require('express').Router();
const path = require('path');
const notes = require('../../db/db');
const fs = require('fs');
const { findById, createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
  res.json(notes.slice(1));
});

router.post('/notes', (req, res) => {
  req.body.id = Date.now().toString();
  const note = createNewNote(req.body, '../../db/db.json')
  res.json(note);
});


router.delete('/notes/:id', (req, res) => {
  const result = findById(req.params.id);
  const index = notes.findIndex(note => note.title === result.title.toString());;
  if (result) {
    res.json(`Note id: ${result.id} has been deleted.`);
    notes.splice(index, 1);
    fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify(notes, null, 2)
  );
  } else {
    res.send(404);
  }
});

module.exports = router;