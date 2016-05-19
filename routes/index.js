var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
   //aqui defino que si en html pongo <%= title %> saldra "Quiz"
});

router.get('/question', quizController.question);
router.get('/check', quizController.check);

module.exports = router;
