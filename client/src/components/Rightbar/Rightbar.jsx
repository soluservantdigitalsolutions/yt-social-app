import React from "react";
import birthdayIcon from "../../assets/gift.png";
import adImage from "../../assets/ad.jpg";
import profilePic from "../../assets/profilepic.jpg";
import OnlineUsers from "../OnlineUsers/OnlineUsers";
import { Users } from "../../data/dummyData";

const Rightbar = ({ profile }) => {
  const RightBarHome = () => {
    return (
      <>
        <div className="flex items-center">
          <img
            src={birthdayIcon}
            alt="birthday icon"
            className="w-[40px] h-[40px] mr-[10px]"
          />
          <span className="font-semibold text-md">
            <b>Henry Crentsil</b> and <b>52 others</b> have a birthday today
          </span>
        </div>
        <img
          src={adImage}
          alt="advert Image"
          className="w-full rounded-lg mt-[30px] mb-[30px]"
        />
        <h1 className="font-bold text-lg mb-[20px]">Online</h1>
        <ul className="m-0 p-0">
          {Users.map((user) => (
            <OnlineUsers key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const RightBarProfile = () => {
    return (
      <>
        <h1 className="font-bold text-xl mb-[10px]">User Information</h1>
        <div className="mb-[30px]">
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              City:
            </span>
            <span>Kumasi</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              From:
            </span>
            <span>Accra</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Relationship:
            </span>
            <span>Single</span>
          </div>
          <h1 className="font-bold text-xl mb-[10px]">Friends</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <img
                src={profilePic}
                alt="user picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={profilePic}
                alt="user picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={profilePic}
                alt="user picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={profilePic}
                alt="user picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={profilePic}
                alt="user picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={profilePic}
                alt="user picture"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <span>Derrick Kello</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div style={{ flex: 3.5, zIndex: -1 }}>
      <div className="pt-[20px] pr-[20px]">
        {profile ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default Rightbar;
