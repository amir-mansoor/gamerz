import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// connect to database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
