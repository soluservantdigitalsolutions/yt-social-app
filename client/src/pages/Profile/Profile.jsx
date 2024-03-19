import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import coverImage from "./assets/coverImage.jpg";
import userImage from "./assets/userImage.jpg";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getUserProfileData } from "../../utils/api/api";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  console.log(username);

  useEffect(() => {
    const getUserProfileInfo = async () => {
      try {
        const res = await getUserProfileData(username);
        setUser(res.data.userInfo);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfileInfo();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div style={{ flex: 9 }}>
          <div>
            <div className="h-[350px] relative">
              <img
                src={coverImage}
                alt="cover picture"
                className="w-full h-[250px] object-cover"
              />
              <img
                src={userImage}
                alt="profile picture"
                className="w-[150px] h-[150px] rounded-full object-cover absolute left-0 right-0 m-auto top-[150px] border-[3px] border-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-2xl">{user.username}</h1>
              <span>{user.bio || "I am new here!"}</span>
            </div>
          </div>
          <div className="flex">
            <NewsFeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
