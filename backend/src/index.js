require("dotenv").config("../.env");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// const db = process.env.MONGODB_URI

const path = require("path");

const dburl = "mongodb+srv://webdualitytechnology:MwQiV3OBqSLUYm9P@webdualitytech.7vk6cri.mongodb.net/?retryWrites=true&w=majority&appName=webdualitytech"

app.use(cors());

app.use(express.json({ limit: '50mb' })); // support json encoded bodies
app.use(express.urlencoded({ limit: '50mb', extended: true })); // support encoded bodies

/*
// Define the directory where your static files are located
const staticFilesDirectory = path.join(__dirname, "../../frontend/build");

// Serve static files with the correct MIME types
app.use(express.static(staticFilesDirectory, {
  setHeaders: (res, filePath) => {
    // Set Content-Type based on file extension
    const ext = path.extname(filePath);
    switch (ext) {
      case '.js':
        res.setHeader('Content-Type', 'text/javascript');
        break;
      case '.css':
        res.setHeader('Content-Type', 'text/css');
        break;
      // Add more cases for other file types if needed
      case '.html':
        res.setHeader('Content-Type', 'text/html');
    }
  }
}));

// Serve index.html for any route
app.get("/*", (req, res) => {
  res.sendFile(path.join(staticFilesDirectory, "index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

*/

const router = require("./routes/routes");

app.use("/v1", router);

app.get("*", (req, res) => {
  return res.status(404).json({ "msg": "API not found" });
})

mongoose
  .connect(dburl, {
  })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.error(err));

// app.listen(process.env.PORT || 8000, function () {
//   console.log("Express app running on port " + (process.env.PORT || 8000));
// });

// Listen
app.listen(8000, function () {
  console.log("Express app running on port " + 8000);
});
