const express = require("express");
const { handleCreateAccount, handleLogin } = require("../controllers/user");

const router = express.Router();

router.post("/create-account", handleCreateAccount).post("/login", handleLogin);

module.exports = router;
