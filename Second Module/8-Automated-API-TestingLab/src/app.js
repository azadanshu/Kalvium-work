const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

/*
-------------------------------
Health Check API
-------------------------------
GET /health
*/
app.get("/health", (req, res) => {

  res.status(200).json({status: "UP"});
  
});

/*
-------------------------------
File upload configuration
-------------------------------
*/

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

/*
-------------------------------
POST /api/user/upload
-------------------------------
Field name must be "profilePic"
*/
app.post(
  "/api/user/upload",
  upload.single("profilePic"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded"
      });
    }

    return res.status(201).json({
      message: "File uploaded successfully",
      fileName: req.file.filename
    });
  }
);

module.exports = app;