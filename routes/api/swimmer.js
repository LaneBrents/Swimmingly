const express = require("express");
const router = express.Router();
const swimmerCtrl = require()

router.post("/", swimmerCtrl.create);
router.get("/", swimmerCtrl.index);
router.delete("/:id", swimmerCtrl.delete);
//router.get("")
module.exports = router;