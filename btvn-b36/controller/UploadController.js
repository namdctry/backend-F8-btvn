const multer = require("multer");
const path = require("path");
const model = require("../models/index");
const User = model.User;
const File = model.File;
module.exports = {
  upload: async (req, res) => {
    try {
      const user = req.user;
      const file = req.file;
      console.log(user.data.userId);
      const uploadedFile = await File.create({
        filename: file.originalname,
        userId: user.data.userId,
      });

      res.json({
        status: "success",
        link: `/uploads/${uploadedFile.filename}`,
      });
    } catch (error) {
      res.status(500).json({ message: "Upload failed" });
    }
  },
};
