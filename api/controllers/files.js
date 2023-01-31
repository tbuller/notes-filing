const File = require("../models/file")

const FilesController = {
  Create: (req, res, next) => {
    const file = new File(req.body)
    file.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "OK" })
      }
    })
  }
}

module.exports = FilesController