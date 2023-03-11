import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors()); //middleware
app.use(express.json({ limit: "50mb" })); //middleware

app.get("/", async (req, res) => {
  res.send("Hellow from DALLE");
});

const startServer = async () => {
  app.listen(8080, () =>
    console.log("Server has started on port http://localhost:8080")
  );
};

startServer();
