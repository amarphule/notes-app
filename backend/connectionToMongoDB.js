const mongoose = require("mongoose");

const connectionToMongoDB = async (url) => {
  console.log({ url });
  await mongoose.connect(url);
};

module.exports = connectionToMongoDB;
