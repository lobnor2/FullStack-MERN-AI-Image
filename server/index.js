import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js"; //write .js after file or else it wont work, in react it will work
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config(); //help us pull environment var from .env file

const app = express(); //initialised express application
app.use(cors()); //middleware
app.use(express.json({ limit: "50mb" })); //middleware

//api endpoints that we can connect and hook from frontend side
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

//first route
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from dalle",
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
