const express = require("express");
const router = express.Router();
const swimmerCtrl = require('../../controllers/swimmer');
const multer = require('multer');
const upload = multer();

router.post("/", swimmerCtrl.create);
router.get('/', swimmerCtrl.getUserSwimmers);
router.delete("/:id", swimmerCtrl.deleteSwimmer);
// router.put('/:id', swimmerCtrl.update);
// router.get("/", swimmerCtrl.index);
// router.get('/:id/edit', swimmerCtrl.edit);

module.exports = router;