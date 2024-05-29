import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import AddEditNotes from "../../components/Cards/AddEditNotes";
import Modal from "react-modal";
import { useState } from "react";

function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <div className="grid grid-cols-3 gap-4 mt-14">
          <NoteCard
            title="My note 1"
            date="3rd march 2024"
            content="My note 1My note 1My note 1My note 1My note 1"
            tags="#myNote"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button className="w-16 h-16 bg-primary flex items-center justify-center rounded-2xl absolute right-10 bottom-10">
        <MdAdd
          className="text-[32px] text-white"
          onClick={() =>
            setOpenAddEditModal({ isShown: true, type: "add", data: null })
          }
        />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() =>
            setOpenAddEditModal({ isShown: false, type: "add", data: null })
          }
        />
      </Modal>
    </>
  );
}

export default Home;
