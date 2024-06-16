const jwt = require("jsonwebtoken");
const User = require("../models/user");

const handleCreateAccount = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName)
    return res
      .status(400)
      .json({ error: true, message: "Full name is required!" });

  if (!email)
    return res.status(400).json({ error: true, message: "Email is required!" });

  if (!password)
    return res
      .status(400)
      .json({ error: true, message: "Password is required!" });

  // Check Existing user
  const isUser = await User.findOne({ email });
  if (isUser)
    return res.json({
      error: true,
      message: "User already exist",
    });

  // Create new user
  const user = await User.create({ fullName, email, password });

  const accessToken = jwt.sign({ user }, process.env.ACCESS_SECRET_TOKEN, {
    expiresIn: "3600m",
  });

  return res.status(201).json({
    error: false,
    message: "User registration successful.",
    user,
    accessToken,
  });
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  const userInfo = await User.findOne({ email });

  if (!userInfo) {
    return res.status(400).json({ message: "User not Found" });
  }

  if (userInfo.email == email && userInfo.password == password) {
    const user = { user: userInfo };

    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {
      expiresIn: "3600m",
    });

    return res.json({
      error: false,
      message: "Login successfull",
      email,
      accessToken,
    });
  } else {
    return res.json({
      error: true,
      message: "Invalid credentials",
    });
  }
};

module.exports = {
  handleCreateAccount,
  handleLogin,
};
