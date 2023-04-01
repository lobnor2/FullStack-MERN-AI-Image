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
  res.status(200).json({ message: "hello from Dalle route" });
});

//hit this post when user click on generate button
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body; //this comes from frontend side
    const aiResponse = await openai.createImage({
      prompt, //user input prompt
      n: 1, //no of image
      size: "1024x1024", //size of image
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;
    // const image = aiResponse.data.data[0].url;
    console.log(image);
    res.status(200).json({ photo: image }); //get image and sending it back to frontend
  } catch (error) {
    // res.status(500).json(error?.response.data.error.message);
    res
      .status(500)
      .json("hello this is error coming from catch block in dalleroutes");
  }
});

export default router;
