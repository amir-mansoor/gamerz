import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { ErrorHandler, notFound } from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
// connect to database
connectDB();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(ErrorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
