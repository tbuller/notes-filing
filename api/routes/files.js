const express = require("express");
const router = express.Router();

const FilesController = require("../controllers/files")

router.post("/", FilesController.Create)

module.exports = router;

