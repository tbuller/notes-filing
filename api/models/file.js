const mongoose = require('mongoose')

const FileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  userId: { type: String, required: true }
})

const File = mongoose.model("File", FileSchema)

module.exports = File;