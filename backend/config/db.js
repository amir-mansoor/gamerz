import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to mongodb");
  } catch (error) {
    console.log("Error while connecting to mongodb");
    console.log(error);
  }
};

export default connectDB;
