/* eslint-disable no-unused-vars */
import { useState } from "react";
import TagInput from "../Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  //   Add note
  const addNote = async () => {};

  //   Edit note
  const editNote = async () => {};

  const handleAddEditNote = (e) => {
    e.preventDefault();
    if (!title) {
      setError("Please add Title");
      return;
    }
    if (!content) {
      setError("Please add Content");
      return;
    }
    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-8 h-8 flex rounded-full items-center justify-center hover:bg-slate-100 absolute -right-3 -top-3"
        onClick={onClose}
      >
        <MdClose />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          placeholder="GO TO GYM"
          className="text-2xl outline-none text-slate-950"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          placeholder="CONTENT"
          className="bg-slate-50 p-2 rounded text-sm outline-none text-slate-950"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddEditNote}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
