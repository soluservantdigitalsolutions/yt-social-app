import React, { useEffect, useState } from "react";
import UploadPost from "../UploadPost/UploadPost";
import Post from "../Post/Post";
import { Posts } from "../../data/dummyData";
import axios from "axios";
import { getAllPosts, getTimeLinePost } from "../../utils/api/api";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const timelinePosts = async () => {
      try {
        const res = await getAllPosts();
        setPosts(res.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    timelinePosts();
  }, []);

  return (
    <div style={{ flex: 5.5 }} className="p-[10px]">
      <UploadPost />
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default NewsFeed;
