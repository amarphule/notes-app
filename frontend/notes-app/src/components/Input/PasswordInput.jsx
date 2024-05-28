import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const togglePasswordShow = () => {
    setIsPasswordShow(!isPasswordShow);
  };
  return (
    <div className="flex items-center bg-transparent rounded border-[1.5px] px-5 mb-3">
      <input
        value={value}
        type={isPasswordShow ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full bg-transparent text-sm py-3 mr-3 outline-none rounded"
        onChange={onChange}
      />
      {isPasswordShow ? (
        <FaRegEye
          size={22}
          className="text-primary cursor-pointer"
          onClick={togglePasswordShow}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-primary cursor-pointer"
          onClick={togglePasswordShow}
        />
      )}
    </div>
  );
};

export default PasswordInput;
