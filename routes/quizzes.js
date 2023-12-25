const express = require('express');
const router = express.Router();
const { createQuiz, getQuiz, submitQuiz } = require('../controllers/quizController');

router.post('/', createQuiz);
router.get('/:quizId', getQuiz);
router.post('/submit/:quizId', submitQuiz);

module.exports = router;

