import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  // likeCount: { // one user can like more than 1 time
  //     type: Number,
  //     default: 0
  // },
  likes: {
    // check which user likes => one user can only like once
    type: [String],
    default: [],
  },
  comments: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
