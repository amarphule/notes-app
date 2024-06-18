const express = require("express");
const {
  handleAddNote,
  handleEditNote,
  handleGetAllNotes,
} = require("../controllers/note");
const { authenticateUser } = require("../middlewares/middlewares");

const router = express.Router();

router.post("/add-note", authenticateUser, handleAddNote);
router.put("/edit-note/:noteId", authenticateUser, handleEditNote);
router.get("/get-all-notes", authenticateUser, handleGetAllNotes);

module.exports = router;
