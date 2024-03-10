import React, { useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import profilePic from "../../assets/profilepic.jpg";
import postPic from "../../assets/postPic.jpg";
import likeIcon from "../../assets/like.png";
import heartIcon from "../../assets/heart.png";
import { Users } from "../../data/dummyData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="w-full rounded-md shadow-lg mt-[30px] mb-[30px] p-[10px]">
      <div className="p-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={
                Users.filter((user) => user.id === post?.userId)[0]
                  .profilePicture
              }
              alt="Profile Picture"
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
            <span className="font-bold ml-[10px] mr-[10px]">
              {Users.filter((user) => user.id === post?.userId)[0].username}
            </span>
            <span className="text-sm">{post.date}</span>
          </div>
          <div>
            <MdOutlineMoreVert className="text-xl cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-[20px] mb-[20px]">
        <span>{post?.desc}</span>
        <img
          src={post.photo}
          alt="Post Picture"
          className="mt-[20px] w-full object-contain "
          style={{ maxHeight: "500px" }}
        />
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
