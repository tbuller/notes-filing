const express = require("express");
const router = express.Router();

const NoteController = require('../controllers/notes');

router.post("/", NoteController.Create);
router.get("/", NoteController.List);
router.delete("/", NoteController.Delete);

module.exports = router;

