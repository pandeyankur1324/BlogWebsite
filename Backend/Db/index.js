import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://pandeyankur55143:${process.env.PASS}@blogcluster.nukzwbw.mongodb.net/blog`
    );
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("error is", error);
  }
};

export default connectDB;
