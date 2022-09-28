const express = require("express");
const router = express.Router();
const heatsheetCtrl = require()

router.post("/", heatsheetCtrl.create);
router.get("/", heatsheetCtrl.index);
router.delete("/:id", heatsheetCtrl.delete);
//router.get("")
module.exports = router;