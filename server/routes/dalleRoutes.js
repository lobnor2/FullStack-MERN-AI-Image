import express from "express";
import * as dotnev from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotnev.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("hellow from dalle");
});

export default router;
