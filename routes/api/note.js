const express = require("express");
const router = express.Router();
const swimmerCtrl = require()

router.post("/", noteCtrl.create);
router.get("/", noteCtrl.index);
router.delete("/:id", noteCtrl.delete);
//router.get("")
module.exports = router;