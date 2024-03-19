import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    dafault: "",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
  },
  from: {
    type: String,
    default: "Ghana",
  },
  city: {
    type: String,
    default: "Accra",
  },
  relationship: {
    type: Number,
    enum: [1, 2, 3],
    default: 1,
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
});

export default mongoose.model("User", userSchema);
