const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectionToMongoDB = require("./connectionToMongoDB");

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const URL = process.env.CONNECTION_MONGODB;

// MongoDB connection
connectionToMongoDB(URL)
  .then(() => console.log("COnnected to MongoDB"))
  .catch((e) => console.error(e));

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

// Server Running on PORT
app.listen(PORT || "5000", () =>
  console.log(`Server running on PORT: ${PORT}`)
);
