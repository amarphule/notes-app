import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };
  const onClearSearch = () => {
    setSearchQuery("");
  };

  const handleSearch = () => {};
  return (
    <div className="bg-white drop-shadow flex px-8 py-2 items-center justify-between">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>

      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClearSearch={onClearSearch}
        handleSearch={handleSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
