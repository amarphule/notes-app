const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.ACCESS_SECRET_TOKEN;

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) res.sendStatus(401);

  jwt.verify(token, SECRET_TOKEN, (error, user) => {
    if (error) return res.sendStatus(401);
    req.user = user;
    next();
  });
};

module.exports = { authenticateUser };
