const express = require("express");
const router = express.Router();
const teamCtrl = require('../../controllers/team')

router.post("/", teamCtrl.create);
router.get("/", teamCtrl.index);
router.delete("/:id", teamCtrl.deleteTeam);
router.get("/MyTeam/:teamId", teamCtrl.getTeam);

module.exports = router;