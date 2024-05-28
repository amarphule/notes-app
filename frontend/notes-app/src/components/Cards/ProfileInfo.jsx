import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center font-medium text-slate-950">
        {getInitials("Amar Phule")}
      </div>
      <div>
        <div className="font-medium text-sm">Amar Phule</div>
        <div
          className="text-sm underline text-slate-700 cursor-pointer"
          onClick={onLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
