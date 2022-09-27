const express = require("express");
const router = express.Router();
const userCtrl = require("../../controllers/api/users");

router.post("/signup", userCtrl.create);

router.post("/login", userCtrl.login);

router.delete("/:id", userCtrl.delete);

module.exports = router;
