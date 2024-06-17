const express = require("express");
const { handleAddNote, handleEditNote } = require("../controllers/note");
const { authenticateUser } = require("../middlewares/middlewares");

const router = express.Router();

router.post("/add-note", authenticateUser, handleAddNote);
router.put("/edit-note/:noteId", authenticateUser, handleEditNote);

module.exports = router;
