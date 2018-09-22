var express = require('express');
var burger = require('./../models/burger.js');

var path = require('path');

var router = express.Router();
//ROUTER

router.get("/", function(req, res) {
  res.render("index");
});

router.post("/submit-order", function(req, res) {
  console.log(req.body.order);
  res.redirect("/");
  // var node = document.createElement("<img>");
  // node.setAttribute("src", )
  //Double, Triple
  //Burger, Beef, Chicken, Fish, Veggie,
  //Lettuce, Tomato, Onions, Cheese, Pickles,
});

router.get("/title", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/layouts/title.jpg"));
});

router.get("/submit-image", function(req, res){
  res.sendFile(path.join(__dirname, "../views/layouts/submit.jpg"));
});

module.exports = router;
