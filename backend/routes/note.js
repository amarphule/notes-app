const express = require("express");
const {
  handleAddNote,
  handleEditNote,
  handleGetAllNotes,
  handleDeleteNote,
} = require("../controllers/note");
const { authenticateUser } = require("../middlewares/middlewares");

const router = express.Router();

router.post("/add-note", authenticateUser, handleAddNote);
router.put("/edit-note/:noteId", authenticateUser, handleEditNote);
router.get("/get-all-notes", authenticateUser, handleGetAllNotes);
router.delete("/delete-note/:noteId", authenticateUser, handleDeleteNote);

module.exports = router;
