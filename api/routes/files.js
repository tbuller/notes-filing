const express = require("express");
const router = express.Router();

const FilesController = require("../controllers/files")

router.post("/", FilesController.Create)
router.get("/", FilesController.List)

module.exports = router;

