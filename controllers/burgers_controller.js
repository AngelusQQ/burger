var express = require('express');
var burger = require('./../models/burger.js');

var path = require('path');

var router = express.Router();
//ROUTER

//Double, Triple
//Burger, Beef, Chicken, Fish, Veggie,
//Lettuce, Tomato, Onions, Cheese, Pickles,

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(data);
    res.render("index", hbsObject);
  });
});

router.post("/submit-order", function(req, res) {
  console.log(req.body.order);
  if(req.body.order.length === 0) { res.redirect("/"); } else {
    burger.insert(req.body.order.toString(), function(result) {
      console.log(result);
      res.redirect("/");
    });
  }
});

router.post("/devour", function(req, res) {
  console.log(Object.keys(req.body)[0]);
  burger.update(Object.keys(req.body)[0], function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.get("/title", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/layouts/title.jpg"));
});

router.get("/submit-image", function(req, res){
  res.sendFile(path.join(__dirname, "../views/layouts/submit.jpg"));
});

module.exports = router;
