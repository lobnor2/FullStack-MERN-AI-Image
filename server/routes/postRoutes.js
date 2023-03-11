import express from "express";
import * as dotnev from "dotenv";
import { v2 as cloudnary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotnev.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("hello from post");
});

export default router;
