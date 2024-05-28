import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { useState } from "react";
import { validEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validEmail(email)) {
      setError("Plese enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter a valid password");
      return;
    }

    setError("");
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 bg-white py-10 px-7 border rounded">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-sm text-red-500 pb-1">{error}</p>
            <button type="submit" className="btn-primary">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?
              <Link
                to="/signup"
                className="font-medium text-primary underline ml-1"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
