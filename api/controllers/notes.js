const Note = require('../models/note');

const NoteController = {
  Create: (req, res, next) => {
    const note = new Note(req.body);
    note.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "OK" });
      }
    })
  },
  List: (req, res, next) => {
    Note.find(async (err, notes) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json({ notes: notes });
      }
    })
  },
  Delete: (req, res, next) => {
    Note.deleteOne(req._id, async(err, noteInfo) => {
      if (err) {
        throw err;
      } else {
        res.status(202).json({ noteInfo : noteInfo });
      }
    })
  }
}

module.exports = NoteController;

