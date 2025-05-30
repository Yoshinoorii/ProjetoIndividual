var express = require("express");
var router = express.Router();

var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/", function (req, res) {
    quizController.checkCarro(req, res);
});

module.exports = router;