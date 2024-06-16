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
    const note = await Note.createOne({
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

module.exports = { handleAddNote };
