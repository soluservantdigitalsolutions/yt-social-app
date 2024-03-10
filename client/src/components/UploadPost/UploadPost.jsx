import React from "react";
import profilePic from "../../assets/profilepic.jpg";
import {
  MdLabel,
  MdPermMedia,
  MdEmojiEmotions,
  MdLocationPin,
} from "react-icons/md";

const UploadPost = () => {
  return (
    <div className="w-full h-[170px] rounded-lg shadow-lg ">
      <div className="wrapper p-[10px]">
        <div className="top flex items-center">
          <img
            src={profilePic}
            alt="profilepic"
            className="w-[50px] h-[50px] rounded-full mr-[10px] object-cover"
          />
          <input
            type="text"
            placeholder="What is on your mind?"
            className="w-[80%] focus:outline-none"
          />
        </div>
        <hr className="m-[20px]" />
        <div className="bottom flex items-center justify-between">
          <div className="flex ml-[20px]">
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdPermMedia className="mr-[3px] text-orange-600" />
              <span>Photo or Video</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdLabel className="mr-[3px] text-blue-600" />
              <span>Tags</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdEmojiEmotions className="mr-[3px] text-yellow-600" />
              <span>Emoji</span>
            </div>
            <div className="flex items-center mr-[15px] cursor-pointer">
              <MdLocationPin className="mr-[3px] text-green-600" />
              <span>Location</span>
            </div>
          </div>
          <button className="bg-green-600 text-white p-[7px] rounded-lg font-bold">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
