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
  },
  List: (req, res, next) => {
    File.find(async (err, files) => {
      if (err) {
        throw err;
      }
      // const token = await TokenGenerator.jsonwebtoken(req.user_id);
      res.status(200).json({ files: files });
    })
  }
}

module.exports = FilesController