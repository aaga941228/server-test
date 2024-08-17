const express = require("express");
const { tokens } = require("../controllers/tokensController");
const router = express.Router();

router.post("/tokens", tokens);

module.exports = router;
