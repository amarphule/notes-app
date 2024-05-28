import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const router = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />}></Route>
      <Route path="/login" exact element={<Login />}></Route>
    </Routes>
  </Router>
);

const App = () => {
  return <div>{router}</div>;
};

export default App;
