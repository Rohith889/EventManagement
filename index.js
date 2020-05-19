const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const home = require("./routers/home");
const indexRoute = require("./routers/indexRoute");
const mongodb = require("./routers/mongodb");
const ejs = require("ejs");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", home);
app.use("/register", mongodb);
app.use("/get-data",mongodb);
app.use("/login", indexRoute);
app.use("/", indexRoute);
app.get("*", (req, res) => {
  res.render("noresults");
});

const server = app.listen(process.env.PORT, () => {
  console.log("Server Running in port", server.address().port);
});
