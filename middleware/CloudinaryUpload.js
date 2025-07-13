// backend/middleware/cloudinaryUploader.js
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require("../utils/Cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'epic-media', // 🔥 Folder in Cloudinary where files go
    allowed_formats: ['jpg', 'png', 'jpeg', 'mp4'],
    transformation: [{ quality: 'auto' }],
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
