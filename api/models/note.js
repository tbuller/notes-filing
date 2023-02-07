const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  file: {type: String, required: true}
})

const Note = mongoose.model("Note", FileSchema);

module.exports = Note;