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

module.exports = {
  handleCreateAccount,
};
