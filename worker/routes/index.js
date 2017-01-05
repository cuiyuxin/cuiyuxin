var express = require('express');
var router = express.Router();
var path=require("path");
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'express' });
  res.sendFile(path.resolve(__dirname,"..","views/phone.html"));
});

module.exports = router;
