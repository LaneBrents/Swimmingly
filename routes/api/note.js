const express = require("express");
const router = express.Router();
const noteCtrl = require('../../controllers/note')

router.post("/", noteCtrl.create);
router.get("/", noteCtrl.index);
router.delete("/:id", noteCtrl.deleteNote);
router.get("/swimmer/:noteId", teamCtrl.getNote);

module.exports = router;