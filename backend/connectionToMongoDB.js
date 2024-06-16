const mongoose = require("mongoose");

const connectionToMongoDB = async (url) => {
  await mongoose.connect(url);
};

module.exports = connectionToMongoDB;
