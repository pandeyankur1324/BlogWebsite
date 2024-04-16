import express from "express";
import connectDB from "../Backend/Db/index.js";
import User from "./Models/user.js";

const app = express();

// connection to DB
connectDB();

app.use(express.json());

const PORT = 8000;

app.get("/", (req, res) => {
  res.header(200).json({
    message: "server is working",
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
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
