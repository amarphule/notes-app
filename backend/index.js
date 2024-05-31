const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.listen(process.env.PORT || "5000", () =>
  console.log(`Server running on PORT: ${process.env.PORT}`)
);
