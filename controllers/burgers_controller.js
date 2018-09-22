var express = require('express');
var burger = require('./../models/burger.js');

var path = require('path');

var router = express.Router();
//ROUTER

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/imageDevelopment", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/layouts/title.jpg"));
});

module.exports = router;
