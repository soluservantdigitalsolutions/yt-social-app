import express from "express";
import {
  createPostController,
  deletePostController,
  getAllPostsController,
  getPostController,
  getTimelinePostsController,
  likeAndDislikeController,
  updatePostController,
} from "../controllers/post.controller.js";
import { parser } from "../config/cloudinary.js";
const router = express.Router();

//create post
router.post("/create-post", parser.single("img"), createPostController);

//update post
router.put("/update-post/:id", updatePostController);

//delete post
router.delete("/delete-post/:id", deletePostController);

//like and dislike
router.put("/like-post/:id", likeAndDislikeController);

//get post
router.get("/get-post/:id", getPostController);

//getAllPosts
router.get("/", getAllPostsController);

//timeline Posts
router.get("/get-timeline-posts/:username", getTimelinePostsController);

export default router;
