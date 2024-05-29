import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <div className="grid grid-cols-3 gap-4">
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
        <MdAdd className="text-[34px] text-white" />
      </button>
    </>
  );
}

export default Home;
