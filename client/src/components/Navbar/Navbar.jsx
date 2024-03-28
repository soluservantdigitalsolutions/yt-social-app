import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import Logo from "../Logo/Logo";
import profilePic from "../../assets/profilepic.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import noProfile from "../../pages/Profile/assets/user.png";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-[50px] w-full bg-green-600 flex items-center sticky top-0">
      <div className="left bg-red" style={{ flex: 3 }}>
        <Link to={"/"}>
          <div className="logodiv cursor-pointer">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="center" style={{ flex: 5 }}>
        <div className="searchBar w-full h-[30px] bg-white rounded-xl flex items-center">
          <IoSearch className=" text-lg ml-[10px]" />
          <input
            type="text"
            className="search w-full focus:outline-none bg-none m-[10px]"
          />
        </div>
      </div>
      <div
        className="right flex items-center justify-around text-white"
        style={{ flex: 4 }}
      >
        <div className="tabLinks text-lg cursor-pointer flex gap-[10px] ">
          <span className="tabLink1 font-bold">Home</span>
          <span className="tablink2 font-bold">Timeline</span>
        </div>
        <div className="tabIcons flex text-xl gap-[10px]">
          <div className="tabIcon1 cursor-pointer relative">
            <IoPersonSharp className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="tabIcon1 cursor-pointer relative">
            <IoChatboxEllipses className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="tabIcon1 cursor-pointer relative">
            <IoIosNotifications className="text-2xl" />
            <span className="w-[15px] h-[15px] bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
        </div>
        <div className="profilePicDiv">
          <Link to={`/profile/${user.username}`}>
            <img
              src={user.profilePicture ? user.profilePicture : noProfile}
              alt="A user Profile Picture"
              className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
