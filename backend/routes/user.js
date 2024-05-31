const express = require("express");
const { handleCreateAccount } = require("../controllers/user");

const router = express.Router();

router.post("/create-account", handleCreateAccount);

module.exports = router;
