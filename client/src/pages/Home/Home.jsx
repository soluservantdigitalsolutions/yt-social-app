import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import Rightbar from "../../components/Rightbar/Rightbar";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <NewsFeed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
