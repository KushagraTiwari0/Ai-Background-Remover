import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>
  res.send("API working "),
);
app.use("/api/user", userRouter);
app.use('/api/image',imageRouter)

//  Async function to start the server after DB connects
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(
        `Server running on PORT ${PORT}`,
      );
    });
  } catch (error) {
    console.error(
      " Failed to connect to DB or start server:",
      error.message,
    );
  }
};

startServer();
