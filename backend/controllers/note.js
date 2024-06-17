const Note = require("../models/note");

const handleAddNote = async (req, res) => {
  const { title, content, tags } = req.body;
  const { user } = req.user;

  if (!title) {
    return res.status(400).json({ error: true, message: "Title is required." });
  }
  if (!content) {
    return res
      .status(400)
      .json({ error: true, message: "Content is required." });
  }

  try {
    const note = await Note.create({
      title,
      content,
      tags: tags || [],
      userId: user._id,
    });

    return res.json({
      error: false,
      message: "Note added successfully",
      note,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal server error!",
    });
  }
};

const handleEditNote = async (req, res) => {
  const noteId = req.params.noteId;
  const { title, content, tags, isPinned } = req.body;

  if (!title && !content && !tags) {
    res.status(400).json({
      error: true,
      message: "No changes provided",
    });
  }

  try {
    const note = await Note.findOne({ _id: noteId });

    if (title) note.title = title;
    if (content) note.content = content;
    if (tags) note.tags = tags;
    if (isPinned) note.isPinned = isPinned;

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note updated successsfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      messasge: "Internal server error.",
    });
  }
};
module.exports = { handleAddNote, handleEditNote };
