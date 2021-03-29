const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const server = express();
let words = require("./db/words.json");

server.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout.hbs",
    partialsDir: "partials",
  })
);
server.set("view engine", "hbs");
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.get("/", (req, res) => {
  res.render("home", {
    words,
  });
});

server.post("/", (req, res) => {
  const { query } = req.body;
  res.render("home", {
    words: words.filter((w) =>
      w.word.toLowerCase().includes(query.toLowerCase())
    ),
  });
});

server.delete("/", (req, res) => {
  let { word } = req.body;
  words = words.filter((w) => !(w.word === word));
});

server.get("/add", (req, res) => {
  res.render("add");
});
server.get("/quiz", (req, res) => {
  res.render("quiz");
});
server.use((req, res) => {
  res.render("404");
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});