import mongoose from "mongoose";

const Post = new mongoose.Schema({
  //Schema is function
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model("Post", Post); //first is name and second is one we created

export default PostSchema;
