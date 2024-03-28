import React, { useContext, useEffect, useState } from "react";
import birthdayIcon from "../../assets/gift.png";
import adImage from "../../assets/ad.jpg";
import profilePic from "./assets/no-profile-image.png";
import OnlineUsers from "../OnlineUsers/OnlineUsers";
import { Users } from "../../data/dummyData";
import { toast } from "react-toastify";
import { followUser, getUserFriends, unfollowUser } from "../../utils/api/api";
import { AuthContext } from "../../context/AuthContext";

const Rightbar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [isFollowed, setIsFollowed] = useState(
    currentUser.followings.includes(user?._id)
      );

  useEffect(() => {
    setIsFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user._id]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await getUserFriends(user?._id);
        setFriends(res.data.friends);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user?._id]);

  const handleFollow = async () => {
    try {
      if (isFollowed) {
        await unfollowUser(currentUser._id, user._id);
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await followUser(currentUser._id, user._id);
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setIsFollowed(!isFollowed);
  };
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
        {user.username !== currentUser.username && (
          <button
            className="bg-green-600 text-white mt-10 mb-5 py-2 px-5 rounded-md cursor-pointer hover:bg-green-700 transition"
            onClick={handleFollow}
          >
            {isFollowed ? "Following" : "Follow"}
          </button>
        )}
        <h1 className="font-bold text-xl mb-[10px]">User Information</h1>
        <div className="mb-[30px]">
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              City:
            </span>
            <span>{user.city}</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              From:
            </span>
            <span>{user.from}</span>
          </div>
          <div className="mb-[10px]">
            <span className="font-semibold mr-[15px] text-slate-500">
              Relationship:
            </span>
            <span>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "It's Complicated"}
            </span>
          </div>
          <h1 className="font-bold text-xl mb-[10px]">Friends</h1>
          <div className="grid grid-cols-3 gap-4">
            {friends.map((friend) => (
              <div key={friend._id} className="flex flex-col items-center">
                <img
                  src={
                    friend.profilePicture ? friend.profilePicture : profilePic
                  }
                  alt="user picture"
                  className="w-[100px] h-[100px] object-cover rounded-md"
                />
                <span>{friend.username}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div style={{ flex: 3.5 }}>
      <div className="pt-[20px] pr-[20px]">
        {user ? <RightBarProfile /> : <RightBarHome />}
      </div>
    </div>
  );
};

export default Rightbar;
