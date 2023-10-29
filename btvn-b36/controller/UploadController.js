const multer = require("multer");
const path = require("path");
const model = require("../models/index");
const User = model.User;
const File = model.File;
module.exports = {
  upload: async (req, res) => {
    try {
      const user = req.user;
      const { file } = req.body;
      const file0000 = req.file;
      console.log(file0000);
      console.log(file);
      const nameFile = file.substring(file.lastIndexOf("\\") + 1);
      console.log(nameFile);
      const uploadedFile = await File.create({
        filename: nameFile,
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
