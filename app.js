const express = require("express");
const hbs = require("express-handlebars");

const server = express();

server.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layouts.hbs",
    partialsDir: "partials",
  })
);
server.set("view engine", "hbs");
server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
  res.render("home", {
    message: "Hello from node.js",
  });
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});