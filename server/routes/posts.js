import express from "express";
import {
  getPost,
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  commentPost
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", auth, getPost);

router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.post("/:id/commentPost", auth, commentPost);
router.patch("/:id/likeCount", auth, likePost);

export default router;
