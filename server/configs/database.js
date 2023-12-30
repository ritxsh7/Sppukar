import mongoose from "mongoose";

const connection = async (url) => {
  try {
    await mongoose.connect(url, {});
    console.log("Database connected successfully to " + url);
  } catch (error) {
    console.log("Error while connecting to server : ", error.message);
  }
};

export default connection;
