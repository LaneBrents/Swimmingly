const express = require("express");
const router = express.Router();
const swimmerCtrl = require('../../controllers/swimmer')

router.post("/", swimmerCtrl.create);
router.get("/", swimmerCtrl.index);
router.get('/:id/edit', swimmerCtrl.edit);
router.delete("/:id", swimmerCtrl.deleteSwimmer);
router.get("/Swimmer/:swimmerId", swimmerCtrl.getSwimmer);
router.put('/:id', swimmerCtrl.update);

module.exports = router;