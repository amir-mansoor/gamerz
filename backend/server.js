import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import feedBackRoutes from "./routes/feedbackRoutes.js";
import { ErrorHandler, notFound } from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import logger from "./middlewares/loggerMiddleware.js";
import cors from "cors"
dotenv.config();

const app = express();
// connect to database
connectDB();

const corsOptions = {
    origin:true,
    credentials:true,
}


app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/feedbacks", feedBackRoutes);

app.use(notFound);
app.use(ErrorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
