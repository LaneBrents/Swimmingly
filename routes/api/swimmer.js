const express = require("express");
const router = express.Router();
const swimmerCtrl = require('../../controllers/swimmer')

router.post("/", swimmerCtrl.create);
router.get("/", swimmerCtrl.index);
router.delete("/:id", swimmerCtrl.deleteSwimmer);
router.get("/Swimmer/:swimmerId", swimmerCtrl.getSwimmer);

module.exports = router;