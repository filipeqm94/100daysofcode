const express = require("express");
const ejs = require("ejs");

//VARIABLES
const homeText =
  "My name is Filipe Marques, and I'm a Fullstack Web Developer. I've been coding for a few years and now I feel like it's time to make a change on my career. I used to work as Retail Manager in the greater Boston area, and decided to start coding as a hobby. A hobby that now turned into a full fledged passion! Come and follow me on this new chapter of my life!";
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    text: homeText,
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
