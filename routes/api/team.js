const express = require("express");
const router = express.Router();
const teamCtrl = require()

router.post("/", teamCtrl.create);
router.get("/", teamCtrl.index);
router.delete("/:id", teamCtrl.delete);
//router.get("")
module.exports = router;