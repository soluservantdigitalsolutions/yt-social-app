import React from "react";
import { SiFeedly } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import {
  IoChatboxEllipsesSharp,
  IoBookmarks,
  IoBriefcase,
} from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaUserGraduate, FaCalendarDay } from "react-icons/fa";
import testImage from "../../assets/profilepic.jpg";
import { Friends } from "../../data/dummyData";
import FriendsList from "../FriendsList/FriendsList";

const Sidebar = () => {
  return (
    <div
      style={{ flex: 3, height: "calc(100vh - 50px)" }}
      className="custom-scrollbar overflow-y-auto sticky top-[50px]"
    >
      <div className=" p-[20px] ">
        <ul className="sidebarList m-0 p-0">
          <li>
            <SiFeedly />
            <span>Feeds</span>
          </li>
          <li>
            <BiSolidVideos />
            <span>Videos</span>
          </li>
          <li>
            <MdGroups />
            <span>Groups</span>
          </li>
          <li>
            <IoChatboxEllipsesSharp />
            <span>Chat</span>
          </li>
          <li>
            <IoBookmarks />
            <span>Bookmarks</span>
          </li>
          <li>
            <BsFillQuestionSquareFill />
            <span>Questions</span>
          </li>
          <li>
            <IoBriefcase />
            <span>Jobs</span>
          </li>
          <li>
            <FaUserGraduate />
            <span>Courses</span>
          </li>
          <li>
            <FaCalendarDay />
            <span>Events</span>
          </li>
        </ul>
        <div className="button">
          <button className="rounded-md bg-slate-200  w-[150px] p-[10px]">
            {" "}
            See More
          </button>
        </div>
        <hr className="mt-[20px]" />
        <div className="mt-[20px]">
          <ul className="sidebarList">
            {Friends.map((friend) => (
              <FriendsList key={friend.id} friend={friend} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
