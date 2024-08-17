const express = require("express");
const { roles } = require("../controllers/rolesController");
const router = express.Router();

router.get("/roles", roles);

module.exports = router;
