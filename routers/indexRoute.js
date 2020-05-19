const express = require("express");
const indexRouter = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
const data = require("./data");
indexRouter
  .route("/events")
  .get((req, res) => {
    res.render("events", { data });
  })
  .post((req, res) => {
    //console.log(req.body);
    const { pincode } = req.body;
    //console.log(search,price,pincode)
    let newArray = data.filter(function(input) {
      return input.pincode === pincode;
    });
    if (newArray.length > 0) {
      //console.log(newArray);
      res.render("results", { newArray });
    } else {
      res.render("noresults");
    }
  });
indexRouter.route("/details/:id").get((req, res) => {
  const result = req.params;
  // console.log(result, result.id);
  const obj = data.filter(function(input) {
    return input.id === result.id;
  });
  //console.log(obj);
  res.render("details", { obj });
});

indexRouter.route("/login").get((req,res)=>{
res.render("login");
});
module.exports = indexRouter;
