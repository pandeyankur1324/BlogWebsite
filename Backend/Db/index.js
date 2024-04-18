import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://pandeyankur55143:ankur1324P@blogcluster.nukzwbw.mongodb.net/blog`
    );
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("error is", error);
  }
};

export default connectDB;
