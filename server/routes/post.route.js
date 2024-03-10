import express from "express";
import {
  createPostController,
  deletePostController,
  getPostController,
  getTimelinePostsController,
  likeAndDislikeController,
  updatePostController,
} from "../controllers/post.controller.js";
const router = express.Router();

//create post
router.post("/create-post", createPostController);

//update post
router.put("/update-post/:id", updatePostController);

//delete post
router.delete("/delete-post/:id", deletePostController);

//like and dislike
router.put("/like-post/:id", likeAndDislikeController);

//get post
router.get("/get-post/:id", getPostController);

//timeline Posts
router.get("/get-timeline-posts", getTimelinePostsController);

export default router;
