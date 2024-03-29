const router = require("express").Router();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// store image
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// upload image
router.post("/upload", (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({ msg: "No files were uploaded" });

    const file = req.files.file;

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large" });
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is not correct!" });
    }

    cloudinary.uploader.upload(
      file.tempFilePath,
      { folder: "FoRApp" },
      async (err, result) => {
        if (err) throw err;
        removeTmp(file.tempFilePath);
        res.json({public_id: result.public_id, url: result.url});
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

// delete image
router.post("/destroy", (req, res) => {
  try {
    const { public_id, url } = req.body;
    if (!public_id) return res.status(400).json({ msg: "No images selected" });

    cloudinary.uploader.destroy(public_id, url, async (err, result) => {
      if (err) throw err;

      res.json({ msg: "Image deleted" });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;