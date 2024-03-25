import React, { useContext, useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import profilePic from "../../assets/profilepic.jpg";
import postPic from "../../assets/postPic.jpg";
import likeIcon from "../../assets/like.png";
import heartIcon from "../../assets/heart.png";
import { Users } from "../../data/dummyData";
import axios from "axios";
import userPic from "./assets/user.png";
import moment from "moment";
import { getUserData, likeAndDislikePost } from "../../utils/api/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes?.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await getUserData(post.userId);
        setUser(res.data.userInfo);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, [post.userId]);

  const handleLike = async () => {
    try {
      await likeAndDislikePost(post._id, currentUser._id);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="w-full rounded-md shadow-lg mt-[30px] mb-[30px] p-[10px]">
      <div className="p-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={user.profilePicture ? user.profilePicture : userPic}
              alt="Profile Picture"
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
            <Link to={`/profile/${user.username}`}>
              <span className="font-bold ml-[10px] mr-[10px]">
                {user.username}
              </span>
            </Link>

            <span className="text-sm">{moment(post.createdAt).fromNow()}</span>
          </div>
          <div>
            <MdOutlineMoreVert className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-[20px] mb-[20px]">
        <span>{post?.desc}</span>
        {post.img && (
          <img
            src={post.img}
            alt="Post Picture"
            className="mt-[20px] w-full object-contain "
            style={{ maxHeight: "500px" }}
          />
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[5px]">
          <img
            src={likeIcon}
            alt="likeIcon"
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleLike}
          />
          <img
            src={heartIcon}
            alt="heartIcon"
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={handleLike}
          />
          <span className="text-sm">{like} likes</span>
        </div>
        <div>
          <span className="cursor-pointer border-b-[1px] border-slate-300 text-sm">
            {post.comment} comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
