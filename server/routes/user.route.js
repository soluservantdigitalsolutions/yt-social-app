import express from "express";
import {
  deleteUserController,
  followUserController,
  getUserController,
  getUserFriendsController,
  getUserProfileController,
  unfollowUserController,
  updateUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

//update USER
router.put("/:id", updateUserController);
//delete user
router.delete("/:id", deleteUserController);

//get a user
router.get("/:id", getUserController);

//get User Profile
router.get("/", getUserProfileController);

//follow a user
router.put("/follow/:id", followUserController);

//unfollow User
router.put("/unfollow/:id", unfollowUserController);

//getFriends
router.get("/friends/:userId", getUserFriendsController);

export default router;
