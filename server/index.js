import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js"; //write .js after file or else it wont work, in react it will work

dotenv.config();

const app = express();
app.use(cors()); //middleware
app.use(express.json({ limit: "50mb" })); //middleware

app.get("/", async (req, res) => {
  res.send("Hellow from DALLE");
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
