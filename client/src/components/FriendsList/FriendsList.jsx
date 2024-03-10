import React from "react";

const FriendsList = ({ friend }) => {
  return (
    <li>
      <img
        src={friend.profilePicture}
        alt="profileImage"
        className="w-[32px] h-[32px] rounded-full object-cover"
      />
      <span>{friend.username}</span>
    </li>
  );
};

export default FriendsList;
