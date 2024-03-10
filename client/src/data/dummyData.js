import postImage1 from "../assets/post/postImage1.jpg";
import postImage2 from "../assets/post/postImage2.jpg";
import postImage3 from "../assets/post/postImage3.jpg";
import postImage4 from "../assets/post/postImage4.jpg";

import userImage1 from "../assets/users/userImage1.jpg";
import userImage2 from "../assets/users/userImage2.jpg";
import userImage3 from "../assets/users/userImage3.jpg";
import userImage4 from "../assets/users/userImage4.jpg";

export const Posts = [
  {
    id: 1,
    desc: "This is a sample post description.",
    photo: postImage1,
    date: "30 minutes ago",
    userId: 101,
    like: 15,
    comment: 3,
  },
  {
    id: 2,
    desc: "Another post description here.",
    photo: postImage2,
    date: "3 days ago",
    userId: 102,
    like: 20,
    comment: 5,
  },
  {
    id: 3,
    photo: postImage3,
    date: "12 hours ago",
    userId: 103,
    like: 84,
    comment: 3,
  },
  {
    id: 4,
    desc: "Another post description here.",
    photo: postImage4,
    date: "7 days ago",
    userId: 104,
    like: 234,
    comment: 5,
  },
];

export const Users = [
  {
    id: 101,
    profilePicture: userImage1,
    username: "Kwaku Sam",
  },
  {
    id: 102,
    profilePicture: userImage2,
    username: "Ama Serwaa",
  },
  {
    id: 103,
    profilePicture: userImage3,
    username: "Samuel Asante",
  },
  {
    id: 104,
    profilePicture: userImage4,
    username: "Mary Marfo",
  },
];

export const Friends = [
  {
    id: 101,
    profilePicture: userImage1,
    username: "Kwaku Sam",
  },
  {
    id: 102,
    profilePicture: userImage2,
    username: "Ama Serwaa",
  },
  {
    id: 103,
    profilePicture: userImage3,
    username: "Samuel Asante",
  },
  {
    id: 104,
    profilePicture: userImage4,
    username: "Derrick Kello",
  },
  {
    id: 105,
    profilePicture: userImage1,
    username: "Henry Crentsil",
  },
  {
    id: 106,
    profilePicture: userImage2,
    username: "Richard Arthur",
  },
  {
    id: 107,
    profilePicture: userImage3,
    username: "Emmanuel Boateng",
  },
  {
    id: 108,
    profilePicture: userImage4,
    username: "Denis Owusu",
  },
];
