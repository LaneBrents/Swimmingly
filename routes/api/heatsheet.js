const express = require("express");
const router = express.Router();
const heatsheetCtrl = require('../../controllers/heatsheet')

router.post("/", heatsheetCtrl.create);
router.get("/", heatsheetCtrl.index);
router.delete("/:id", heatsheetCtrl.deleteHeatsheet);
router.get("/Heatsheet/:heatsheetId", heatsheetCtrl.getHeatsheet);

module.exports = router;