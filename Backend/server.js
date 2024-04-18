import express from "express";
import connectDB from "../Backend/Db/index.js";
import User from "./Models/user.js";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
    credentials: true,
  })
);
// connection to DB
connectDB();

app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => {
  res.header(200).json({
    message: "server is working",
  });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    console.log("User Doesn't Exist");
    res.header(500).json({
      msg: "User Doesn't Exist",
    });
  }

  try {
    if (password == user.password) {
      const accessToken = jwt.sign(user.username, "peyushankur", {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(user.username, "peyushankur", {
        expiresIn: "45m",
      });
      res.status(200).json({
        msg: "password aagya",
      });
    } else {
      res.status(200).json({
        msg: "password doesn't match",
      });
    }
  } catch (err) {
    console.log("error occured: ", err);
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const newUser = new User({ name, username, password });
    await newUser.save();
    res.header(200).json({
      msg: "User Added Successfully",
      newUser,
    });
  } catch (error) {
    res.header(500).json({
      msg: "error occured while sign up",
      error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
