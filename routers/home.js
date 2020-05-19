const express = require("express");
const indexRouter = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
const data = require("./data");
const home=express.Router();
home.route("/").get((req, res) => {
  res.render("home");
});
module.exports =home;
