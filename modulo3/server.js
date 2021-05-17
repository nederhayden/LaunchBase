const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function (req, res) {
  const about = {
    avatar_url:
      "https://avatars2.githubusercontent.com/u/33813497?s=460&u=cc801eec8c0f981dc7f9543c40a9f3ea7f22bd29&v=4",
    name: "Neder Simões",
    role: "Student",
    description: "Estudante de programação.",
    links: [
      { name: "Github", url: "https://github.com/nedersimoes" },
      { name: "Instagram", url: "https://www.instagram.com/nederhayden/" },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/neder-sim%C3%B5es-6baa66188/",
      },
    ],
  };

  return res.render("about", { about });
});

server.get("/portfolio", function (req, res) {
  return res.render("portfolio", { items: videos });
});

server.get("/video", function (req, res) {
  const id = req.query.id;

  const video = videos.find(function (video) {
    return video.id == id;
  });

  if (!video) {
    return res.send("Video not found!");
  }

  return res.render("video", { item: video });
});

server.listen(5000, function () {
  console.log("server is running");
});
