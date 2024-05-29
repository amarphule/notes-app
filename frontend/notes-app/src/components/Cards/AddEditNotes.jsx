const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          placeholder="GO TO GYM"
          className="text-2xl outline-none text-slate-950"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          placeholder="CONTENT"
          className="bg-slate-50 p-2 rounded text-sm outline-none text-slate-950"
          rows={10}
        />
      </div>
      <div className="mt-3">
        <label className="">TAGS</label>
      </div>
      <button className="btn-primary font-medium mt-5 p-3" onClick={() => {}}>
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
