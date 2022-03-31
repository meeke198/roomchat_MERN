// routes / auth.js;
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json("goi login");
});

module.exports = router;
