import {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likeAndDislike,
  updatePost,
} from "../services/post.service.js";

export const createPostController = async (req, res) => {
  try {
    const newPost = await createPost(req.body);
    res.status(200).json({
      newPost,
      message: "Post has been created Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post creation Failed",
      err,
    });
  }
};

export const updatePostController = async (req, res) => {
  try {
    const updatedPost = await updatePost(req.params, req.body);
    res.status(200).json({
      updatedPost,
      message: "Post has been updated Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post update failed",
      err,
    });
  }
};

export const deletePostController = async (req, res) => {
  try {
    const deletedPost = await deletePost(req.params, req.body);
    res.status(200).json({
      deletedPost,
      message: "Post has been deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post deletion failed",
      err,
    });
  }
};

export const likeAndDislikeController = async (req, res) => {
  try {
    const post = await likeAndDislike(req.params, req.body);
    res.status(200).json({
      post,
      message: "Post like or dislike action has been completed",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post Like or dislike action failed",
      err,
    });
  }
};

export const getPostController = async (req, res) => {
  try {
    const post = await getPost(req.params);
    res.status(200).json({
      post,
      message: "Post has been fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post fetch failed",
      err,
    });
  }
};

export const getTimelinePostsController = async (req, res) => {
  try {
    const timelinePosts = await getTimelinePosts(req.body);
    res.status(200).json({
      timelinePosts,
      message: "Timeline Post fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post fetch failed",
      err,
    });
  }
};
