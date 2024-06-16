const express = require("express");
const { handleAddNote } = require("../controllers/note");
const { authenticateUser } = require("../middlewares/middlewares");

const router = express.Router();

router.post("/add-note", authenticateUser, handleAddNote);

module.exports = router;
