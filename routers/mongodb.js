const express=require("express");
const mongodb=express.Router();
const mongo=require("mongodb");
const assert=require("assert");
const url="mongodb://localhost:5000/test";


mongodb.get("/register",function(req,res,next){
res.render("register");
  });
mongodb.get("/get-data",function(req,res,next){
  var result=[];

  mongo.connect(url,function(err,db){
    assert.equal(null,err);
    var cursor=db.collection("user-data").find();
    cursor.forEach(function(doc,err){
      assert.equal(null,err);
      result.push(doc);
    },function(){
      db.close();
      res.render("register",{result});

    });

  });
});

mongodb.post("/insert",function(req,res,next){
    var item={
      firstname:req.body.firstname,
      username:req.body.username,
      password:req.body.password,
      repassword:req.body.repassword,
    };
    mongo.connect(url,function(err,db){
      assert.equal(null,err);
      db.collection("user-data").insertOne(item,function(err,result){
      assert.equal(null,err);
      console.log("items inserted");
      db.close();

      });
    });
    res.redirect("/register");
        
  });
mongodb.post("/update",function(req,res,next){
        
  });
mongodb.post("/delete",function(req,res,next){
        
  });
  module.exports=mongodb;
  