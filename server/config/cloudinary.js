import { v2 } from "cloudinary";
const cloudinary = v2;
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "yt-social-app",
    resource_type: "image",
  },
});

const parser = multer({ storage: storage });

export { cloudinary, parser };
