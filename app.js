const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

//VARIABLES
const homeText =
  "My name is Filipe Marques, and I'm a Fullstack Web Developer. I've been coding for a few years and now I feel like it's time to make a change on my career. I used to work as Retail Manager in the greater Boston area, and decided to start coding as a hobby. A hobby that now turned into a full fledged passion! Come and follow me on this new chapter of my life!";

const aboutPage = "about me page";

const contactPage = "contact me page";

const posts = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//GET requests

app.get("/", (req, res) => {
  res.render("home", {
    text: homeText,
    posts,
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    text: aboutPage,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    text: contactPage,
  });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/post/:postName", (req, res) => {
  const postName = _.lowerCase(req.params.postName);

  const postTitles = [];

  posts.forEach((post) => {
    postTitles.push(_.lowerCase(post.title));
  });

  const n = postTitles.indexOf(postName);

  res.render("post", {
    title: posts[n].title,
    body: posts[n].body,
  });
});

// POST requests

app.post("/compose", (req, res) => {
  const post = {
    title: req.body.blogPostTitle,
    body: req.body.blogPostBody,
  };

  posts.push(post);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
