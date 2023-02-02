const mongoose = require('mongoose')

const FileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  parents: { type: Array, required: false },
  children: { type: Array, required: false }
})

const File = mongoose.model("File", FileSchema)

module.exports = File;